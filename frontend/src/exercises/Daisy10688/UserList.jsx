function UserList() {
  const users = [
    { id: 1, name: "Daisy", role: "Team Lead" },
    { id: 2, name: "Syanda", role: "Team Member" },
  ];

  return (
    <div>
      <h2>Our Team Members</h2>

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.role}
            </li>
          ))}
        </ul>
      ) : (
        <p>No team members found.</p>
      )}
    </div>
  );
}

export default UserList;