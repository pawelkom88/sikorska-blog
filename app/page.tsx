import Link from "next/link";

export default function Page() {
  return (
    <section>
      <br />
      <h1 className="text-center text-4xl font-medium mt-8 mb-4">Sikorska Notary Blog</h1>
      <br />
      <p className="my-4 text-justify">
        Hello and welcome to Sikorska Notary Blog, where I share my insights and tips on various
        notarial matters. My name is Patrycja Sikorska and I am a mobile notary in Bristol and the
        South West of England.
      </p>
      <p className="my-4 text-justify">
        As a notary, my main function is to certify the authenticity of documents, signatures and
        identities for use in foreign countries. I also advise clients on the formalities and
        requirements of different legal systems and jurisdictions. I deal with both individual and
        corporate clients, and each case is different and treated individually.
      </p>

      <p className="my-4 text-justify">
        In this blog, I will share with you some of the typical stages of notarial activities, the
        documents and evidence required for different types of transactions, the fees and
        disbursements involved, and the legalisation process for different countries. I will also
        answer some of the frequently asked questions and common misconceptions about notaries and
        their role. I hope you will find this blog informative and helpful, and if you have any
        questions or comments, please feel free to contact me.
      </p>
      <br />
      <h2 className="text-center text-2xl">Choose language</h2>
      <br />
      <div className="flex justify-center gap-8">
        <Link href="/blog/pl">
          <svg
            className="cursor-pointer"
            width={100}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="#f0f0f0" d="M0 85.337h512v341.326H0z" />
            <path fill="#f0f0f0" d="M0 85.337h512V256H0z" />
            <path fill="#d80027" d="M0 256h512v170.663H0z" />
          </svg>
        </Link>
        <Link href="/blog/eng">
          <svg
            className="cursor-pointer"
            width={100}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="#f0f0f0" d="M0 85.333h512V426.67H0z" />
            <path
              fill="#d80027"
              d="M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z"
            />
            <path
              fill="#0052b4"
              d="M393.785 315.358 512 381.034v-65.676zM311.652 315.358 512 426.662v-31.474l-143.693-79.83zM458.634 426.662l-146.982-81.664v81.664z"
            />
            <path fill="#f0f0f0" d="M311.652 315.358 512 426.662v-31.474l-143.693-79.83z" />
            <path fill="#d80027" d="M311.652 315.358 512 426.662v-31.474l-143.693-79.83z" />
            <path
              fill="#0052b4"
              d="M90.341 315.356 0 365.546v-50.19zM200.348 329.51v97.151H25.491z"
            />
            <path fill="#d80027" d="M143.693 315.358 0 395.188v31.474l200.348-111.304z" />
            <path
              fill="#0052b4"
              d="M118.215 196.634 0 130.958v65.676zM200.348 196.634 0 85.33v31.474l143.693 79.83zM53.366 85.33l146.982 81.664V85.33z"
            />
            <path fill="#f0f0f0" d="M200.348 196.634 0 85.33v31.474l143.693 79.83z" />
            <path fill="#d80027" d="M200.348 196.634 0 85.33v31.474l143.693 79.83z" />
            <path
              fill="#0052b4"
              d="M421.659 196.636 512 146.446v50.19zM311.652 182.482V85.331h174.857z"
            />
            <path fill="#d80027" d="M368.307 196.634 512 116.804V85.33L311.652 196.634z" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
