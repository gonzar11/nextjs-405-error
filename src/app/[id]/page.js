"use client";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function Page({ params: { id } }) {
  const [state, setState] = useState(0);
  const arr = [1, 2, 3];

  useEffect(() => {
    setState(id);
    return () => {
      console.log("useEffect cleanup");
    };
  }, [id]);

  return (
    // Multiple anchor tags with hrefs to google
    <div>
      <a href="https://google.com">Google</a>
      <a href="https://infobae.com">Infobae</a>
      <Link href="/foo">Foo</Link>
      {state === "1" && <Link href="/something">About Us</Link>}

      {state === "1" && <p>Gonzalo Ricco is a softare Engineer</p>}
      {state === "2" && <p>Gonzalo Ricco is a Musician</p>}
      <p>Los modelos de iphone preferidos son el iphon1 y el iphone 2</p>
      <p>
        Suspendisse tristique et ex non faucibus. Pellentesque a urna risus. Ut
        non enim finibus, tempus dui eget, tincidunt sem. Phasellus sed mauris
        elit. Pellentesque a urna risus. Ut non enim finibus, tempus dui eget,
        tincidunt sem. Phasellus sed mauris elit. Pellentesque condimentum lorem
        vitae justo congue, ut semper nisi gravida. Suspendisse tristique et ex
        non faucibus. Pellentesque a urna risus. Ut non enim finibus, tempus dui
        eget, tincidunt sem. Phasellus sed mauris elit. Pellentesque a urna
        risus. Ut non enim finibus, tempus dui eget, tincidunt sem. Phasellus
        sed mauris elit. Pellentesque condimentum lorem vitae justo congue, ut
        semper nisi gravida. Suspendisse tristique et ex non faucibus.
        Pellentesque a urna risus. Ut non enim finibus, tempus dui eget,
        tincidunt sem. Phasellus sed mauris elit. Pellentesque a urna risus. Ut
        non enim finibus, tempus dui eget, tincidunt sem. Phasellus sed mauris
        elit. Pellentesque condimentum lorem vitae justo congue, ut semper nisi
        gravida.
      </p>
    </div>
  );
}
