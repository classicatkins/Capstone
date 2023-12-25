import html from "html-literal";
//import dogPic from "../../assets/img/dog-with-flower.jpg";
import melissa from "../../assets/img/melissa-circle.png";
import logo from "../../assets/img/Perpetua Logo.png";

export default () => html`
  <section id="about">
    <div class="container">
      <div class="box">
        <h2>About Me</h2>
        <img
          class="img-about"
          src="${melissa}"
          alt="photo of melissa"
        />
        <p>
          As a passionate and dedicated Full Stack Developer at Sketch
          Development Services, I specialize in creating innovative software
          solutions. Currently, I am contributing to development in Time Front,
          a key project utilizing technologies such as MongoDB, Vue, TypeScript,
          Playwright, and JavaScript. My role in this Agile environment involves
          not only coding but also contributing to the continuous improvement of
          our software, ensuring both efficiency and user satisfaction.
        </p>

        <p>
          At Murray State University, where I earned a bachelor's degree in
          Music Education with a minor in Computer Science, I laid the
          foundation of my technical expertise. Beyond practical programming in
          Java, JavaScript, and C++, my studies delved into essential computer
          science concepts such as Object-Oriented Programming, Algorithms, and
          Data Structures. This rigorous academic training honed my analytical
          skills and provided a strong theoretical understanding that underpins
          my practical work.
        </p>

        <p>
          I am committed to continuous learning and currently enhancing my skill
          set through the Savvy Coders' Full Stack Web Development course. Here,
          I am gaining hands-on experience in building advanced web applications
          using Node.js and JavaScript, further broadening my expertise in the
          field.
        </p>

        <p>
          I am keen on exploring new opportunities in technology that challenge
          me and allow me to contribute to innovative solutions. Let’s connect
          to discuss how we can collaborate to drive technological advancement
          and innovation!
        </p>
      </div>

      <div class="box">
        <h2>About Perpetua</h2>
        <img
          class="img-habit"
          src="${logo}"
          alt="Perpetua Logo"
        />
        <p>
          Perpetua is a dynamic web application designed to provide users with a
          platform to create, monitor, and maintain their daily habits. This
          interactive, user-friendly interface is the result of a capstone
          project integrating HTML, CSS, and JavaScript.
        </p>

        <p>
          Key features include habit creation, an interactive dashboard, habit
          tracking, a responsive design, progress analytics, custom reminders,
          and a user-friendly interface. Data persistence is achieved through
          JavaScript's local storage, ensuring tracking continues seamlessly.
        </p>

        <p>
          This project serves as a testament to the power of web development
          technologies in creating practical, user-centric applications. It
          demonstrates proficiency in front-end development, emphasizing design
          thinking and user experience.
        </p>
      </div>
    </div>
  </section>
`;
