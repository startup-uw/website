# StartupUW Website

Built upon this [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)

By Aaron Chen

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
- Google Sheets edits update slowly (a couple minutes) to Firestore
- Pull profile picture URLs from Firebase Storage's "getDownloadURL"
- Uses React Context/Higher Order Components (HOC) to provide Firebase/Firestore to this app
- Contact forms are integrated with Formspark (shared to `startup@uw.edu`)

## Zapier Integration
- Shared with team email `startup@uw.edu`
- Optional addition, users can simply edit Firestore directly if they don't want to use the Sheets/Zapier combo
- Row #'s are used as document IDs to allow ordering of team members
- When UPDATING rows on the team/events sheets, duplicate documents are created in Firestore
- Turn the Zapier ZAP off when deleting row data in the sheets (ie. changing teams)




    

