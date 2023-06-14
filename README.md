# Blog Site

## Description
This blog site allows users to write and publish articles, and to comment on each other's content.
I created this site as an exercise in using [Handlebars](https://handlebarsjs.com/), and creating a
login/authentication system with sessions.

## Installation
Before running, `db/schema.sql` should be used to initialize a database, and `npm run seed` used to
insert sample data.  Also, environment variables should be set for database name (`DB_NAME`), database
user (`DB_USER`), database password (`DB_PASSWORD`), and session secret (`EXP_SESS_SECRET`).  These
values will be picked up automatically if they are stored in a `.env` file in the project's root.
See [dotenv](https://www.npmjs.com/package/dotenv) for more details.

## Usage
The home page displays a list of blog posts in short form: title, author, and a link to the full article.
Article pages show the full content, and also display a list of comments that have been made.  The top right
of the page contains a link to a login page, where you can either create a new account, or log into your your
existing one.  If you are logged in, you gain the ability create new comments on article pages.  There is a
user dashboard (linked in the top right) that displays a list of your blog posts, and contains a link to 
edit them.  It is also possible to delete posts entirely from the edit screen.

## Credits
In addition to the packages listed in `package.json`, the blog site uses [Bootstrap](https://getbootstrap.com/)
for styling.  Sample data was generated with [https://loremipsum.io/](https://loremipsum.io/).

## License
MIT