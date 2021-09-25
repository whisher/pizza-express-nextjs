import type { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        <Link href="/">
          <a>&larr; Go Back</a>
        </Link>
      </p>
    </div>
  );
};

export default About;
