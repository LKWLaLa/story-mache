# story-mache

### Description:

A collaborative story writing SPA, built with Angular + a Rails API backend.  

### Structure:

Users navigate the app through the stories index page, and can browse and read stories, contribute to a story, or begin a new story of their own.  Stories are searchable by any word in the title, body, or author's name, and can be filtered by number of contributors, as well as ordered by contributor count and most recent updates.  There is a has-many relationship between stories and contributions, and users can hover over the body of a story to highlight individual contribution delineation and view author's name for each contribution.

### Dependencies:

The API for story-mache is built with Rails version 4.2.6, using Ruby version 2.2.3p173, and a sqlite3 database. The active_model_serializers gem is responsible for JSON serialization.  Front end functionality depends on angularjs-rails, angular-ui-router-rails, angular-rails-templates, and angular_rails_csrf gems. 

### Installation Guide:

If not already available, install Ruby, Bundler, and Rails.

Then clone this repository.

In the command line, run:

```bash
bundle
bundle exec rake db:migrate
```

To start up a local server, run `rails s` and navigate to localhost:3000 in your web browser.

### Contributors:

 Pull requests are welcome.  Contributors, please adhere to the [Contributor Covenant code of conduct](http://contributor-covenant.org/).


### License:

The MIT License (MIT)

Copyright (c) 2016 Lindsey Wells

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.









