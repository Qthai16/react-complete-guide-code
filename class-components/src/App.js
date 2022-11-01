import UserFinderNew from "./components/UserFinder";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

function App() {
  return (
    <div>
      <UserFinderNew usersList={DUMMY_USERS} />
    </div>
  );
}

export default App;
