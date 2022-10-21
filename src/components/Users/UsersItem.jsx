import { Wrapper, UserName, UserEmail, OpenToWork, Paragraph } from './UsersItem.styled';

export const UsersItem = ({ user }) => {
  const { name, email, isOpenToWork } = user;

  return (
    <Wrapper>
      <UserName>{name}</UserName>
      <UserEmail>{email}</UserEmail>
      <OpenToWork open={isOpenToWork} />

      <Paragraph>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
        <span>Eveniet modi dignissimos ratione quod in vitae quae, hic maiores quasi,</span>
        <span>aliquam quia facilis, rerum voluptatum eligendi velit explicabo harum ex molestias.</span>
      </Paragraph>
    </Wrapper>
  );
};
