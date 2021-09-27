import type { NextPage } from "next";
import Link from "next/link";

const MyAccount: NextPage = () => {
  return (
    <div>
      <h1>MyAccount Page</h1>
      <p>
        <Link href="/">
          <a>&larr; Go Back</a>
        </Link>
      </p>
    </div>
  );
};

export default MyAccount;
