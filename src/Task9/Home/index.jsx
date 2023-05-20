import React from "react";
import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.MainCont}>
      <img src="/iwal.jpg" alt="" />
      <h2>Wal Husna Faizul</h2>
      <span>(Web Developer)</span>
      <hr color="darkgreen" />
      <h4>Overview</h4>
      <p>
        Saya seorang web developer di daerah Pekanbaru Riau. Saya juga mahasiswa
        di Universitas Islam Riau dan saya juga mengikuti Bootcamp Web Frontend
        Engineer by Productzilla Academy
      </p>
      <table border="1">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Pendidikan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Html</td>
            <td>SD Negeri 1 Bengkalis</td>
          </tr>
          <tr>
            <td>Css</td>
            <td>SMP Negeri 1 Bengkalis</td>
          </tr>
          <tr>
            <td>Javascript</td>
            <td>SMA Negeri 1 Bengkalis</td>
          </tr>
          <tr>
            <td>React js</td>
            <td>Universitas Islam Riau Pekanbaru</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
