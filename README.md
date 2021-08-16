# Movie-Recommender-mod2-project

by William Neal and Marcos Lipic

&Chill is a simple web app that allows a user to search TheMovieDatabase API and it's archive of thousands upon thousands of movies to help get ideas for a movie night! Featuring a Ruby on Rails backend and Vanilla Javascript frontend, the application allows a user to search by several parameters to find a movie that suits their mood. 

=======
# Using the Application

To get started using &Chill movie search first visit, https://github.com/Jawnny5/Movie-Recommender-mod2-project, 
fork and clone down the repository. Navigate to the folder "movie-backend" and run the following commands
-bundle install
-rails db:migrate
-rails db:seed

And finally to kick off the rails backend server, run the command rails s.

Open a separate terminal, navigate to the folder "frontend" and execute the command npx lite-server to start the front end!

# Keyword Search
The main text field is a key word search bar. A user can enter comma or non comma separated keywords that will be included in the query when the search request is sent.

# Genre
On the bottom left on the keyword search is a dropdown menu that features a robust list of movie genres. A user is then able to select a genre to be included when the search request is sent.

# Release Year 
On the bottom right of the keyword search is a dropdown menu that features movie release years going all the way back to 1913 when motion pictures became popular. A user is then able to select a release year to be included when the search request is sent.

After making a selection of any combination of the above parameters, and clicking the "Give Me Ideas" button the user  then sends a search request and a movie matching their requested parameters is returned.

# "Give Me Ideas" button
In addition to firing off the initial search request, the "Give Me Ideas" button continues to return all movies the API finds that match the given parameters randomly.

# Watch Later
If a user clicks the "Watch Later" button on a returned movie that movie is then added to a right side panel of the UI for the user to reference later after going through all of the matching results.


