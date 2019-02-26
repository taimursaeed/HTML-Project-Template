# HTML Project Directory Structure

A front-end template for your project
## Directory Tree

![Directory Tree](https://i.imgur.com/fdZ8yux.png)

Explanation of the tree is as below:

### Root Folder
* Index.html
* Favicon.ico
* Manifest.json , Manifest.webapp


### Fonts
All fonts and font icons should go here
### Images
Place all general images here. For more specific images like icon, logos, and mobile favicons use **ICON, LOGOS and TOUCH** folders respectively.
### Plugins
Files of all third-party libraries and plugin should go in this folder. Create a subfolder for each new plugin using camelCase naming convention.

Example:

![Example](https://i.imgur.com/dgbycWt.png)

Here **datatables.css** and **datatables.min.js** are plugin files and **custom-datatables.js** has our custom JS to use that plugin.
### Scripts
JS files go here. Use **app.js** for JS code that is intended to be used on all pages. While for any page specific JS create an individual file like **contact-us.js, new-page.js** etc.
### Styles
All stylesheets go here. **CSS** folder contains all compiled css files. Common styles should go to **app.css** and page specific styles should go to their individual stylesheets like **contact-us.css, new-page.css**

The **SCSS** contains precompiled files and are meant to facilitates frontend developers only.
## Naming Conventions
| Type	| Naming Convention| Example|
| ------------- |-------------| -----|
| Files	     | hyphen-case| contact-us.js,new-page.css|
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
|Folder	|camelCase|	newFolder, jqueryValidator
|Stylesheet|	hyphen-case	|contact-us.css
|Script|	hyphen-case|	Jquery-validator.js
|Class Name|	hyphen-case|	Class=”new-class”
|ID Name|	camelCase	|id=”changeColor”
|Function|	camelCase	|myFunction()
|Variable|	camelCase	|myVar=1;

### Labels
The ID of an input element should be same as the name of its related label is. And follow camelCase for **name** and **for** attributes. E.g

![Example](https://i.imgur.com/layiGMI.png)

### JS Code
If the component is to be used multiple times on same page, then use class to handle JS. e.g

![Example](https://i.imgur.com/BURq8Ql.png)
> Use prefix “js” in such cases

![Example](https://i.imgur.com/U5FCh9h.png)
> Common code for multiple components

Use **ID** if component is to be used once only 
![Example](https://i.imgur.com/HsEKgXl.png)
![Example](https://i.imgur.com/TfEPLRw.png)