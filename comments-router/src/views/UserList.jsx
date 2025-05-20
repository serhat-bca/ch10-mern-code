import User from "../components/User";

const UserList = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      {users.map((u) => (
        <User user={u} key={u.id} />
      ))}
    </div>
  );
};

export default UserList;
