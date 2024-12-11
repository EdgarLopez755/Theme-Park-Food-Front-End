import styles from './Dashboard.module.css'

const Dashboard = ({ user }) => {
  return (
    <main className={styles.container}>
      <img src="https://i.postimg.cc/SNynJCHw/temp-Imaged06e-Xc.avif" alt="logo"/>
      <h1>Welcome!, {user.username}</h1>
      <p>
        Check out what NEW snacks people have been posting at Disneyland !
      </p>
      

    </main>
  );
};

export default Dashboard;
