import React from "react";

export default function PageContent() {
  const faqItems = [
    {
      question: "What is blankspace?",
      answer: (
        <p>
          Blankspace is a community that helps people learn, grow, and connect.
          <ul>
            <li>
              We provide a variety of resources and opportunities for people to
              learn and develop their knowledge and skills.
            </li>
            <li>
              {" "}
              We recommend projects and works based on your interests, so you
              can always find something new to learn.
            </li>
            <li>
              We connect people with similar interests so you can collaborate on
              projects, share ideas, and build relationships.
            </li>
            <li>
              {" "}
              We host hackathons and events to give you a chance to put your
              skills to the test and meet other like-minded people.
            </li>
          </ul>
          Whether you're a beginner or an experienced professional, Blankspace
          has something to offer you.
        </p>
      ),
    },
    {
      question: "Why should I join Blankspace?",
      answer: (
        <p>
          Blankspace is a community that connects people, projects, and
          opportunities.
          <ul>
            <li>
              We create a network between colleagues so that you can collaborate
              on projects, share ideas, and build relationships.
            </li>
            <li>
              We explore many projects that will provide you with a working
              experience, so you can learn new skills and advance your career.
            </li>
            <li>
              We expose community members outside the community so that you can
              be assigned with projects from several departments, giving you a
              well-rounded experience.
            </li>
            <li>
              We schedule several events and programs that will help you achieve
              your goals, such as hackathons, workshops, and meetups.
            </li>
          </ul>
        </p>
      ),
    },
    {
      question: "Is it free to join Blankspace?",
      answer: (
        <p>
          Yes, it is absolutely free to join Blankspace! By becoming a member of
          our vibrant community, you'll gain access to an abundance of valuable
          resources, exciting collaboration opportunities, and a nurturing
          environment where like-minded individuals are ready to support you
          every step of the way. Join our free community today and unlock a
          world of benefits awaiting you!
        </p>
      ),
    },
    {
      question: "What are the benefits of joining Blankspace?",
      answer: (
        <p>
          Our community is a great place to learn and grow your programming
          skills.
          <ul>
            <li>
              We offer a variety of resources and opportunities for members to
              learn, including:{" "}
            </li>
            <ul>
              <li>
                {" "}
                Access to a community of experienced programmers who are always
                willing to help
              </li>
              <li>
                The opportunity to work on real-world open source projects
              </li>
            </ul>
            <li>
              We also host regular quizzes and competitions to help members test
              their knowledge and skills.
            </li>
          </ul>
          If you're looking to improve your programming skills, our community is
          the perfect place for you.
        </p>
      ),
    },
    {
      question: "Can I use my personal Gmail to create an account?",
      answer: (
        <p>
          We are currently only accepting college email addresses for
          registration.
          <ul>
            <li>
              This is to ensure that our community is made up of genuine
              students who are interested in learning and growing.
            </li>
            <li>
              We will be updating our policies on email verification soon, and
              we will announce the changes here on our website.
            </li>
          </ul>
          In the meantime, if you are a student and you do not have a college
          email address, please contact us and we will be happy to help you
          create an account. We hope you understand and we look forward to
          seeing you in our community!
        </p>
      ),
    },
  ];
  return (
    <>
      <section
        className="dark-mode position-relative pt-5"
        style={{ backgroundColor: "#151922" }}
      >
        {/* Content */}
        <div className="container position-relative zindex-2 pt-5 pb-2 pb-md-0">
          {/* Breadcrumb */}
          <nav className="pt-lg-4" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="index.html">
                  <i className="bx bx-home-alt fs-lg me-1" />
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contacts
              </li>
            </ol>
          </nav>
          <div className="row justify-content-center pt-3 mt-3">
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
              <h1 className="mb-4">Get in Touch</h1>
              <p className="fs-lg pb-3 mb-3">
                Got a Question, Feedback, or Suggestions? Get in Touch with Us
                via Email for Prompt Assistance and Collaboration!
              </p>
            </div>
          </div>
        </div>
        {/* Bottom shape */}
        <div
          className="d-flex position-absolute top-100 start-0 w-100 overflow-hidden mt-n5"
          style={{ color: "#151922" }}
        >
          <div
            className="position-relative start-50 translate-middle-x flex-shrink-0 mt-n5 mt-md-n3 mt-lg-n1"
            style={{ width: "3788px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3788"
              height="144"
              viewBox="0 0 3788 144"
            >
              <path
                fill="currentColor"
                d="M0,0h3788.7c-525,90.2-1181.7,143.9-1894.3,143.9S525,90.2,0,0z"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="container py-5 my-md-2 my-lg-4 my-xl-5">
        <div className="row justify-content-center pt-5 pb-1 pb-sm-2 pb-md-3">
          <div className="col-xxl-8 col-xl-9 col-lg-10 pt-sm-2 pt-md-5">
            <div className="d-sm-flex justify-content-center">
              <div className="d-flex flex-column w-sm-50 border-0 bg-transparent text-center px-sm-1 px-md-5 pb-3 pb-sm-0 mb-4 mb-sm-0">
                <div className="card-body p-0">
                  <div className="d-inline-block bg-secondary text-primary rounded-circle fs-3 lh-1 p-3 mb-3">
                    <i className="bx bx-envelope" />
                  </div>
                  <p className="pb-2 pb-sm-3 mb-3">
                    Please feel free to drop us a line. We will respond as soon
                    as possible.
                  </p>
                </div>
                <div className="card-footer border-0 p-0">
                  <a
                    href="mailto:blankspacecommunity@gmail.com"
                    className="btn btn-lg btn-primary"
                  >
                    Send email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="bg-secondary rounded-3 py-5 px-3 px-sm-4 px-md-0">
          <h2 className="text-center pt-md-1 pt-lg-3 pt-xl-4 pb-4 mt-xl-1 mb-2">
            Frequently Asked Questions
          </h2>
          <div className="row justify-content-center pb-lg-4 pb-xl-5">
            <div className="col-xl-8 col-lg-9 col-md-10 pb-md-2">
              <div className="accordion" id="faq">
                {faqItems.map((item, index) => (
                  <div
                    className="accordion-item border-0 rounded-3 shadow-sm mb-3"
                    key={index}
                  >
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button shadow-none rounded-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#q-${index + 1}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`q-${index + 1}`}
                      >
                        {item.question}
                      </button>
                    </h3>
                    <div
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      id={`q-${index + 1}`}
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
