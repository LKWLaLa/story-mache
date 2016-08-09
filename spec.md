# Specifications for the Angular Assessment

Specs:
- [x] Use Angular to build the app
- [x] Must contain some sort of nested views

   The story.contribute state is nested inside of the story state.

- [x] Must contain some sort of searching as well as filtering based on some criteria. Ex: All items in the "fruit" category, or all tasks past due

   Users can search via a regular search filter, filter by a min/max number of story contributions, or order by either most recently updated or most contributions.

- [x] Must contain at least one page that allows for dynamic updating of a single field of a resource. Ex: Allow changing of quantity in a shopping cart

  When a contribution is added to a story, the story's total_contribution field is dynamically incremented in Rails, and is listed on that story's show view.

- [x] Links should work correctly. Ex: Clicking on a product in a list, should take you to the show page for that product
    Links work correctly.

- [x] Data should be validated in Angular before submission

    All input boxes are input 'required,' and will show the user a validation message if the box is blank after being $touched.  Also, the submit button does not appear until the entire form is valid.

- [x] Must talk to the Rails backend using $http and Services
      Yes.

- [x] Your README.md includes a short description, install instructions, a contributors guide and a link to the license for your code
    Yes.

Confirm
- [x] You have a large number of small Git commits
- [x] Your commit messages are meaningful
- [x] You made the changes in a commit that relate to the commit message
- [x] You don't include changes in a commit that aren't related to the commit message
