import { Component } from 'react';

import { Button } from 'components/Button';
import NotFound from 'components/NotFound';
import { Status } from 'config';
import { getPostsService } from 'services/posts.service';

import { PostsItem } from './components/PostsItem';
import { PostsLoader } from './components/PostsLoader';
import { SearchPosts } from './components/SearchPosts';

export class Posts extends Component {
  state = {
    posts: null,
    // isLoading: false,
    // isError: false,

    status: Status.INIT,
    search: '',
  };

  // async componentDidMount() {
  //   this.setState({ status: Status.LOADING });

  //   try {
  //     const responce = await getPostsService();
  //     this.setState({ posts: responce, status: Status.SUCCESS });
  //   } catch {
  //     this.setState({ status: Status.ERROR });
  //   }
  // }

  // async componentDidUpdate(_, prevState) {
  //   const { search } = this.state;
  //   if (prevState.search !== search) {
  //     this.setState({ status: Status.LOADING });

  //     try {
  //       const responce = await getPostsService({ search });
  //       this.setState({ posts: responce, status: Status.SUCCESS });
  //     } catch {
  //       this.setState({ status: Status.ERROR });
  //     }
  //   }
  // }

  componentDidMount() {
    this.fetchPosts({ limit: 4 });
  }

  async componentDidUpdate(_, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.fetchPosts({ search, paga: 1, limit: 4 });
    }
  }

  fetchPosts = async params => {
    this.setState({ status: Status.LOADING });

    try {
      const responce = await getPostsService(params);
      this.setState({ posts: responce, status: Status.SUCCESS });
    } catch {
      this.setState({ status: Status.ERROR });
    }
  };

  handleChangePage = page => {
    const { search } = this.state;
    this.fetchPosts({ page, search, limit: 4 });
  };

  handleSearch = value => {
    this.setState({ search: value });
  };

  render() {
    // const { isLoading, isError, posts } = this.state;
    const { status, posts } = this.state;

    // if (status === Status.ERROR) {
    //   return <NotFound />;
    // }

    // if (status === Status.LOADING || status === Status.INIT) {
    //   return <PostsLoader />;
    // }

    return (
      <>
        <SearchPosts onSubmit={this.handleSearch} />

        {status === Status.ERROR && <NotFound />}

        {(status === Status.LOADING || status === Status.INIT) && <PostsLoader />}

        {status === Status.SUCCESS && (
          <div className="container-fluid g-0 pb-5 mb-5">
            <div className="row">
              {posts?.data.map(post => (
                <PostsItem key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {posts && (
          <div className="pagination">
            <div className="btn-group my-2 mx-auto btn-group-lg">
              {[...Array(posts?.total_pages)].map((_, index) => {
                const page = index + 1;

                return (
                  <Button
                    onClick={() => this.handleChangePage(page)}
                    className={posts.page === page ? 'btn-secondary' : 'btn-primary'}
                    key={index}
                  >
                    {page}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}
