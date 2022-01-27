## Executive Overview
This is a simple movie listing application made with React-node javascript frameworks. We have setup a clean UI with React framwork and a RestFul Api with node framework. This app has mainly 6 features.

1. Listing all movies
2. Add New movie
3. View Movie Info
4. Comment on each movie
5. Login
6. Sign Up

# List movie feature
You can see all the movies added on the application by visiting `http://localhost:3000/`. it will give you a list of all movies add through add movie feature. 
Sample Screen Below:
![List Movie](https://i.ibb.co/TW5SBZF/screencapture-localhost-3000-film-2022-01-27-23-11-07.png)
# Add New Movie
if you are a registerd user on the app and you are able to successfully logged in you can see a Add movie button on top nav bar and list movies page. By clicking on the same you can add new movies to the app.
Sample Screen below:
![Add new Movie](https://i.ibb.co/mhKtXnj/screencapture-localhost-3000-add-Movie-2022-01-27-23-21-53.png)


# View Movie Info 
You can view each movie details on a detailed info page even without logging in. You can click on any movie name from the list movie page to view the movie. This view page mainly 2 section 
1. Movie info which has information card with movie details you selected to view
2. Comments section which show all the comments made by all the user for the selected movie and if you are a logged in user you can see a post comment section as well.

Sample Screen below:
![View Movie](https://i.ibb.co/CK95qdd/screencapture-localhost-3000-film-the-shawshank-redemption-2022-01-27-23-15-21.png)


# Comment on each movie
if you are a registerd user on the app and you are able to successfully logged in you can see a add comment section on each movie page with all the previous comments made by all the user for the same movie. Just type in your comment and click on `post comment` button to post your comments about the 
Sample Screen below:
![Comment Section](https://i.ibb.co/TM5kn8G/screencapture-localhost-3000-film-the-godfather-2022-01-27-23-20-46.png)


# Login
If the user has successfully registerd his/her details to the app they can login to the app by visting `http://localhost:3000/login` or by clicking login button on the top navbar. You have to enter your registerd email id and password.
Sample Screen below:
![Login](https://i.ibb.co/N9L0h8B/screencapture-localhost-3000-login-2022-01-27-23-16-55.png)


# Sign Up
If you want to add new movie or comment on a movie you need to be a registerd user. If you have already have credentials registerd with the app you can login using the same by visiting `http://localhost:3000/login` or by clicking login button on the top navbar. If you want to register as a new user you can visit `http://localhost:3000/signup` or by clicking sign up button on the top navbar. You will requested to fill in some personal information. just fill in your info and choose a passowrd. After successfull registration you will get see a success message on top. And then you can use the same email and password to login  to the app. 
Note: You cannot register same email twice on the app it will give an error for the same.
Sample Screen below:
![Sign Up](https://i.ibb.co/BcN4bgn/screencapture-localhost-3000-signup-2022-01-27-23-17-53.png)



## Development Setup Info

1. Go to backend-node and copy `.envsample` to `.env`
2. Fill in db details and a sceret key for jwt token encryption
3. Run `npm run install:all` on root folder to install dependencies for both FE & BE
4. Run `npm run db:setup` create DB with db name mentioned in `.env` file. and migrate db structure and seed the tables with dummy data
5. Run `npm run start:all` to start both front-end and back-end togather.
6. Finally the FE will running on port `3000` and BE will running on `5000`

Note: Visit `http://localhost:3000/` 
default user created `sanu@test.com:testPassword`

