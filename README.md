# StartupUW Website

Built upon this [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)

By Aaron Chen and Connor Carlson

To begin, run: 

`npm install` then `npm start` 
    
To generate components, containers, and more:

`npm run generate`

## Todo
- Homepage responsiveness and design finish
- Loading icons (team and events page)
- Contact page
- Overall polish (animations)
- 404 page
- Social media icons and links
- Gather all team pictures

## Notes
- Turn the Zapier ZAP off when deleting row data in the sheets (ie. changing teams)
- Google Sheets edits update fairly slowly (a couple minutes) to Firestore
- Pull profile picture URLs from Firebase Storage's "getDownloadURL"
- Using React Context and Higher Order Components (HOC) to provide Firebase/Firestore to this app
- Contact forms are integrated with Formspark (shared to startup@uw.edu)
- Row #'s are used as document IDs to allow ordering of team members



    

