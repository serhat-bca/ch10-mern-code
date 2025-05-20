import CommentForm from "./components/CommentForm";
import Footer from "./components/Footer";
import About from "./views/About";
import CommentList from "./views/CommentList";
import Login from "./views/Login";
import UserList from "./views/UserList";

const App = () => {
  const users = [
    { id: 1, name: "Alice Johnson", username: "alicej", numberOfComments: 12 },
    { id: 2, name: "Brian Lee", username: "brianl", numberOfComments: 5 },
    {
      id: 3,
      name: "Carla C Nguyen",
      username: "carla_n",
      numberOfComments: 23,
    },
    { id: 4, name: "David Patel", username: "dpatel", numberOfComments: 0 },
    { id: 5, name: "Ella Kim", username: "ellakim", numberOfComments: 8 },
    { id: 6, name: "Frank O'Hara", username: "franko", numberOfComments: 19 },
    { id: 7, name: "Grace Miller", username: "gracem", numberOfComments: 2 },
    { id: 8, name: "Hector Rivera", username: "hectorr", numberOfComments: 14 },
    { id: 9, name: "Ivy Chen", username: "ivychen", numberOfComments: 7 },
    { id: 10, name: "Jake Thompson", username: "jaket", numberOfComments: 0 },
  ];

  const comments = [
    { id: 1, comment: "Nice work!", likes: 12, views: 50 },
    { id: 2, comment: "Well done.", likes: 8, views: 34 },
    { id: 3, comment: "I agree.", likes: 4, views: 18 },
    { id: 4, comment: "Interesting.", likes: 15, views: 60 },
    { id: 5, comment: "Try again.", likes: 2, views: 22 },
    { id: 6, comment: "Love this!", likes: 19, views: 70 },
    { id: 7, comment: "Too short.", likes: 1, views: 10 },
    { id: 8, comment: "Very clear.", likes: 6, views: 25 },
    { id: 9, comment: "Thanks!", likes: 10, views: 40 },
    { id: 10, comment: "Good point.", likes: 7, views: 33 },
  ];

  return (
    <div>
      <h1>Comments App</h1>
      <CommentList comments={comments} />
      <CommentForm />
      <UserList users={users} />
      <About />
      <Login />
      <Footer />
    </div>
  );
};

export default App;
