# Feed Reader Testing Udacity Nanodegree Program

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

In this project we were given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/).

## Steps to successfully run the application

To start the application you have to open index.html in your browser.

The tests can be found in the feedreader.js file. If a test passes it will be shown in green in the browser using Jasmine, otherwise it will be red if the test fails.

## Tests in this Project

It was tested if the RSS Feeds are defined and if the URL and name is defined and not empty.
The menu should be hidden by default and should change its visibility when clicked.
There should be at least one entry element in the feed container.
When the new feed loads the content should change.
