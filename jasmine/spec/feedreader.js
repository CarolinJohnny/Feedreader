/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* First test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
      empty.*/
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* Test that loops through each feed in the allFeeds object
     * and ensures it has a URL defined and that the URL is not empty.*/
    it('URL defined and URL not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });

    /* Test that loops through each feed in the allFeeds object
     * and ensures it has a name defined and that the name is not empty. */
    it('name defined and name not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });
    });
  });


  /* New test suite named "The menu" */
  describe('The menu', function() {

    /* Test that ensures the menu element is
     * hidden by default. */
    it('menu hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /* Test that ensures the menu changes
     * visibility when the menu icon is clicked. */
    it('menu changes visibility', function() {
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);

      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  /* New test suite named "Initial Entries" */
  describe('Initial Entries', function() {

    beforeEach(function(done) {
      loadFeed(0, done);
    });

    /* Test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * loadFeed() is asynchronous so this test require the use of
     * Jasmine's beforeEach and asynchronous done() function.*/
    it('.entry element within .feed container', function() {
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });

  /* New test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {
    var oldFeed;
    var newFeed;

    beforeEach(function(done) {
      loadFeed(0, function() {
        oldFeed = $('.feed').html();
        done();
      });
    });

    /* Test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * loadFeed() is asynchronous.*/
    it('new feed loaded and content changes', function(done) {
      loadFeed(1, function() {
        newFeed = $('.feed').html();
        expect(newFeed).not.toEqual(oldFeed);
        done();
      });
    });
  });
}());
