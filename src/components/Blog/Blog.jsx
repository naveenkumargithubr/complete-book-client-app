import React from "react";
import { Accordion } from "flowbite-react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>Why is Goodreads so popular?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              It allows users to create virtual bookshelves, rate and review
              books, and connect with other readers. One of the main advantages
              of Goodreads is that it provides a sense of community for book
              lovers. You can discover new books, share your thoughts and
              opinions, and connect with like-minded individuals.12 Jun 2023
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://www.goodreads.com/choiceawards/best-books-2023"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
              and start gaining the knwoledge.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is Goodreads free to read books?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              How much do I have to pay? Goodreads is free. Note however that
              you can't read books on Goodreads. Goodreads is free.4 Jan 2021
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the
              <a
                href="https://www.goodreads.com/choiceawards/best-books-2023"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Good reads book website.
              </a>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Can I publish my book on Goodreads?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              All you need is an Internet connection and a published book (or a
              soon-to-be published book) that can be found in our database. The
              Goodreads Author Program allows published authors to claim their
              profile page to promote their book and engage with readers.
            </p>

            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about Good Reads:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://www.goodreads.com/choiceawards/best-books-2023"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Good reads
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>Does Goodreads have a limit?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our daily limits within Goodreads changes from time to time and
              has been put in place as a preventative measure to deter spam
              therefor we do not provide the set daily limit. Hope this helps!29
              Aug 2023
            </p>

            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about goodreads:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://www.goodreads.com/choiceawards/best-books-2023"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Good reads
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blog;
