# 100 Days Of Code Web Development Bootcamp
>
> 100 Days Of Code - Web Development Bootcamp by Maximilian Schwarzmüller Udemy Course. 
>
>[Link to course](https://www.udemy.com/course/100-days-of-code-web-development-bootcamp)
>
> [Github repo](https://github.com/academind/100-days-of-web-development/tree/04-html-css-first-practice-summary)


#### HTML [Basics](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements ): 
Hyper Text Markup Language 

<img width="972" height="583" alt="image" src="https://github.com/user-attachments/assets/55cd3581-8fd8-4a3f-a24c-6117fea7a343" />

<img width="972" height="641" alt="image" src="https://github.com/user-attachments/assets/7f41ffd7-1516-496f-bfac-98073f04fda1" />

<img width="924" height="461" alt="image" src="https://github.com/user-attachments/assets/7b7500da-741a-4906-94e3-a82f7e6cee67" />


### Quiz 1: 
What is HTML all about?
A: HTML is used to define and describe your content and page structure.

In its most basic form: What exactly is a "web page"?
A: A *.html file thats served by a server

How is a web page loaded by the browser?
A: The HTML content is stored in a file on a remote server and sent by the server to the browser when the user vists the page

What's an "HTML Element"?
A: An annotated piece of content: HTML Tags (WHich include the name of an element) + content

Why do we need HTML elements?
A: HTML elements annotate content and provide more meaing to it. 

Which HTML elements can you use?
A: All the standardised HTML elements 

What's the idea behind "HTML attributes"?
A: HTML attributes allow you to addextra configuration to an element 


#### CSS basics 
Cascading Style Sheets

<img width="800" height="586" alt="image" src="https://github.com/user-attachments/assets/0f054dd4-3e70-4b44-a127-4576eab5e8a8" />

When not using inline styles (via the style attribute), CSS code typically looks something like this:

p {
    font-family: sans-serif;
    text-align: center;
}
This code is formatted to be more readable. Theoretically, you could also write it like this:

p {font-family: sans-serif;text-align: center;}
But of course such kind of code is way harder to understand and maintain, hence we typically go for the more readable version.

Here are a couple of conventions about CSS code formatting, which you should keep in mind:

The selector (p in the above example) and the opening curly brace typically go into the same line

You then have one CSS property + its value per line

Every line MUST end with a semi-colon

The lines are indented (automatically, via the "Format Document" shortcut or because you pressed the TAB key on your keyboard)

The closing curly brace goes into a separate line, with no indentation


#### Meta tags and history

HTML back story: 
![history](https://github.com/user-attachments/assets/f496dd08-0d29-49cf-b720-a083532e7136)

![meta](https://github.com/user-attachments/assets/edbfb7a7-0264-435e-a016-9ce5523d0ff0)


#### More about Visual Sutdio COde
Read these notes from [this](https://academind.com/tutorials/visual-studio-code-introduction/) web page

#### Code Comments [Day 3]
One thing we haven't used up to this point but which you will see later in the course are "Comments" in your code.

As a developer, you can add extra, human-readable comments into your HTML or CSS code which will be ignored by the browser but can help you or other developers understand your code.

Here's how you would add a comment in HTML:

```
<body>
    <h1>This is a main title!</h1>
    <!-- This is a comment - the browser ignores it. It won't show up on the user's screen -->
</body>
```

Comments are added with help of the special <!-- opening and --> closing tags. They are only visible in your source code, not on the rendered page.

You can also add comments in your CSS code:

```
p {
    font-family: sans-serif; /* Switch to sans-serif instead of serif */
}
```

In CSS, you create comments via the `/* */`. Again, you can add extra annotations for other developers (or yourself) with help of comments - the browser will ignore them, they hence won't affect your page styles.

Comments are also not just used for adding extra information but also for "commenting out" unused code.

For example, if you want to test a different color but not lose your previously picked color, you could comment our your old CSS property/value pair and add the new one in addition. The old one, which was commented out, will be ignored by the browser but you can always switch back to it by simply removing the comment.

```
p {
    /* color: red; */
    color: green;
}
```

color: red is commented out in the above example. Hence it's ignored by the browser but we can still easily switch back to it.

In Visual Studio Code, there also are shortcuts for quickly adding or removing comments around the code in a selected line - simply search for the "Toggle Line Comment" shortcut


### Quiz 2:
What's the main idea behind CSS?
A: CSS is used to set the styling and look of your page and content. 

How do you use CSS?
A: You set "properties" and their values for HTML elements

What does "inline styles" mean?
A: It meams that you can assign element styles via the "style" attribute. 

What's the advantage of "global CSS" styles (i.e. NOT "inline styles")?
A: One CSS rule can apply to multiple elements of the page. 

What's a "CSS Selector"?
A: The part of a CSS rule that defines for which element(s) the rule applies.

What's the idea behind the "head" and "body" sections in the HTML document?
A: It clarifies which content is the main visual content and which data is extra metadata

What happens if you edit the page (e.g. HTML element styles or attributes) via the browser developer tools?
A: The page is changed until you reload.


#### Understanding How HTML & CSS Handle Text & Whitespace [Day 5]
In this lecture, we'll explore two main concepts.

How browsers handle "whitespace" (line breaks and indentation)

How you can output special characters (e.g. "<") as text in HTML documents

How Browsers Handle Whitespace
In both HTML and CSS (and later also in "JavaScript"), as a developer, you typically try to format and structure code such that it is readable (for humans).

For example, the following two snippets contain the same code and hence would lead to the same result. The browser would understand both, but they are not equally readable / understandable for us humans:

1) No formatting
   
```
<html><head><title>A test </title><style>h1{color:red}</style></head><body><h1>Hi there!</h1><p>This is some text...</p></body></html>
```

2) Formatting with line breaks and indentation (i.e. lots of "whitespace")

```
<html>
  <head>
    <title>A test </title>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hi there!</h1>
    <p>This is some text...</p>
  </body>
</html>
```

By default, the browser (typically - there are few exceptions, which we'll explore later) ignores line breaks and indentation in your HTML and CSS code. That's why, as a visitor of the site, you will see the same result for both snippets.

Since the result is the same, but we as a developer are a human, we typically go for the second approach - using lots of indentation and line breaks to structure and organize our code.

How To Output Special Characters In HTML
When writing HTML code, characters like "<" and ">" obviously have a special meaning: They mark the beginning and ending of HTML tags.

But what if you would want to output the "<" and ">" characters or a complete HTML tag as text on your website? Like on this site here (yes, the site on which you currently are). You can read the code snippets above just fine - because they are output as plain text (they are NOT interpreted as HTML by the browser that loaded this page).

There are two main ways of achieving this:

You can use the special `<pre>...</pre>` tags (for "preformatted text") - these tags wrap any text (that may include HTML code) and "tell the browser" to output it as plain text (i.e. NOT interpret it as HTML code). When using `<pre>`, whitespace is also preserved and NOT ignored (as it normally would be)

Alternatively, if you simply want to output the "<" character (e.g. in some math formula that should be shown on your page), you can use some special "shortcuts" (so-called "HTML entities") in your HTML code:

E.g. if you write &gt; in your HTML code, the browser will output the ">" (greater than) symbol

``&lt; => "<" `` (lower than)


#### Adding Images

Always add an alt attribute so that users who can't see the image can hear what it is about. 

Styling an image so it's centered and circular: 

```
img {
    width: 200px;
    height: 200px;
    border-radius: 100px;  
}

body {
    text-aligned: center; 
}
```

To center - you need to target the parent container for it to work. 

#### A Word About File Name Conventions [Day 5]
In (web) development, we have a lot of rules and conventions when it comes to naming things.

For example, we named our main HTML file index.html. This is NOT something you have to do - it's just a common convention. And some hosting providers might require that name, in order to serve your files successfully. But in general, you could've named it My First File.html as well. Nonetheless, it is recommended to stick to such common conventions.

The question is: How do you name your second, third etc. HTML files? And how you should you name your CSS files?

For HTML files, it's generally a good idea to give them names that describe the main purpose or content of the page that will be loaded.

For example, if you have a HTML file that will display the shopping cart content of a user, cart.html might be a fitting name. The HTML file that is responsible for displaying a bunch of online shop products might be named products.html.

For CSS files, you typically either have a file that belong to a specific HTML file or you have global CSS files (that are used in multiple / all HTML files):

For page-specific CSS files, it's a good idea to repeat the HTML filename (e.g. cart.css holds the styles for cart.html).

For CSS files that belong to multiple HTML files, you might want to choose general names like base.css or describe the general purpose of the HTML files to which the CSS file belongs, like online-shop.css for both the cart.html and products.html files.

There's also one important characteristic which you maybe noticed about all these filenames: They are all lowercase.

And that's important! Whilst it's technically not required, it is a very common convention that you name your files all-lowercase, with no special characters except for dashes (-). If your file name consists of multiple words, you should NOT separate them with blanks (whitespace) but instead use dashes. So use online-shop.html instead of Online Shop.html.

### Quiz 3:

What's a "pseudo-selector"?
A: A CSS selector like :hover which allows you to set styles for an element that fulfills a certain condition 

Why is it called "Cascading Style Sheets"?
A: Because more than one CSS rule may apply to the same element.

What's special about the <img> element?
A: It has no content, it's configured with attributes only 

Which of the following file names would be a good choice for a second HTML file that shows some contact details about the page owner?
A: "contact.html"


Assigmnet
What was the most challenging part in the assignment and how did you overcome it?
Couldn't hear the second request for the type of font clearly, so went with a different type of sans font. 

[Link](https://fonts.google.com/selection/embed) to get the Google fonts used


Adding live server extension to editor so we can view the code while we make changes instead of reloading the browser. 
<img width="1127" height="719" alt="image" src="https://github.com/user-attachments/assets/c566226a-f9f9-480b-8022-1498a762ebd3" />

### The Development Server & The Local Website Address [Day 6]
In the previous lecture, we started a local development web server via the "Live Server" Extension for VS Code.

What Is A "Development Web Server"?
It's a "local development web server" because it's a web server software that serves the website locally, on our machine. It's NOT exposing our machine or the website to the internet - you can only visit and reach it locally (i.e. from your machine).

This "web server software" (i.e. the "Live Server" extension in this case) is a software that does actually listen for incoming HTTP requests and send back appropriate responses (that contain the HTML code for example). Remember that request + response image form the first course section!

Later in the course, we'll also set up our own web server that is able to do more things than just send back pre-defined HTML code. We'll dive into the creation of our own backend and our own web server with a technology called "NodeJS" from section 16 on.

What's This Address: 127.0.0.1?
As mentioned above, this development web server hosts (= provides / serves) the website from our local machine to our local machine.

In section 1, you learned that users enter addresses (URLs) into the browser address bar to reach a website and send such a request. You also learned that the human-readable "domains" (like academind.com) are translated to IP addresses which act as unique identifiers of machines connected to the internet.

127.0.0.1 is such an IP - though it's a special one!

127.0.0.1 is a special IP, that's reserved to your local machine. And it's the local machine for everyone!

If I type 127.0.0.1 into the browser, I connect to my local machine (if it's running a local web server). You reach your machine.

It's an IP address that's NOT assigned to other machines in the world wide web - instead it's reserved as a "placeholder" that always points at your local machine. It exists for use-cases as we have it here: For development on our local machine, where we want to test our website with help of a local development server. I.e. we can test it locally without exposing it to the entire world yet.

There also is an alias (basically like a "special domain name") that you can use locally, instead of 127.0.0.1: localhost. You can also enter localhost into your browser and it will be the same as if you entered 127.0.0.1. So localhost:5500 is a replacement for 127.0.0.1.

What's This Thing: :5500?
The :5500 part is a so-called "port".

Ports are another concept from the networking world. The idea is, that a machine can expose different processes (e.g. different web servers serving different websites) via different ports.

So a single machine could host / provide three different websites on three different ports. The IP address of the local machine would always be the same (127.0.0.1) but every website would have its own port (e.g. 5500, 3000, 8080).

If you move a website to some machine that IS exposed to the world wide web (i.e. you publish it, you don't run it via a development web server on your local machine anymore), then the website is reached via the IP address of that remote machine. Or, typically, via a domain that's pointing at that IP address.

In addition, this port concept also still exists: When exposed to the world wide web, websites are typically served on ports 80 (HTTP) or 443 (HTTPS). You don't need to worry about this right now though. When publishing a website (covered later in the course), the different hosting providers typically take care about exposing the right ports automatically.

When working on your local machine, you don't use these "common ports" (80, 443) since you're not exposing the website to the world wide web anyways. Instead, you can use ANY ports that are typically not used by any other processes - 5500, 3000 or 8080 are common choices because they aren't typically used by other processes.

That's why the "Live Server" extension does use port 5500 for serving your website locally.

And you target a specific port by adding :<port-number> after the domain or IP address. That's why 127.0.0.1:5500 resolves to that locally served website. Alternatively, since 127.0.0.1 is aliased with localhost, you could also enter localhost:5500.

You can try this with other websites, too!

Try visiting academind.com:443 or academind.com:80 => You will see the regular Academind website. Of course you don't need to add the extra port information in the URL though - since 80 and 443 are the defaults, the browser will use these ports automatically, if you enter a website address.

#### Nesting elements and how they use styles

<img width="2400" height="1800" alt="image" src="https://github.com/user-attachments/assets/cb646585-7d54-4dc5-b49a-2e0343fef126" />

NB:
Inheritance: (Selected) container rules apply to decendents
Cascading style sheets: multiple rules can be applied to the same element
Specificity: More specific selector's rule wins over less specific selector


### CSS Box Model 

##### The Four Areas of the Box Model
Each box consists of the following layers, from the innermost to the outermost: 
* Content: The innermost area where the actual content (text, images, or other media) is displayed. Its size is controlled by the width and height properties in CSS.
* Padding: The transparent space that immediately surrounds the content area, inside the border. It provides "breathing room" for the content. The background of the element extends into the padding area. Properties like padding-top, padding-right, padding-bottom, and padding-left are used to control its size.
* Border: A visible line or boundary that wraps around the padding and content areas. The border properties are used to define its style (e.g., solid, dotted), width, and color.
* Margin: The outermost, transparent space that surrounds the border, creating distance between the current element and other neighboring elements on the page. Margins are always transparent and do not have a background color. Properties like margin-top, margin-right, margin-bottom, and margin-left control the outer spacing, and negative values are allowed. 

<img width="3401" height="2894" alt="image" src="https://github.com/user-attachments/assets/b24be4f8-f1fa-4686-b807-2d9c2e226a3c" />

#### Selectors and Combinators 

> Selectors
> 
> > Type - elements
> >
> > ID - #id
> >
> > Group - elementname, element name
> >
> > Class - .class
> >
> Combinations
>
> > Descendant - li p All p with li as ancestor
> >
> > Child - h2 > p Only p which are direct children of h2
> 

#### Display Propery with CSS

<img width="3401" height="2894" alt="image" src="https://github.com/user-attachments/assets/01e826be-ff40-4f60-95c4-c6e92c362c64" />

<img width="2400" height="1800" alt="image" src="https://github.com/user-attachments/assets/9cfd47a2-eae4-4e14-8950-79ac660090a6" />


### A List Of All CSS Selectors [Day 8]
Thus far, we already learned about a lot of key CSS selectors. Here's a list / summary of all the CSS selectors that you can use in CSS (including some, which we haven't seen yet):

Tag type selector

CSS: p { ... }

Would select this HTML element for example: <p>Some text...</p>

This selector selects all HTML elements that are of this tag type

ID selector

CSS: #some-id { ... }

Would select this HTML element for example: <h1 id="some-id">...</h1>

This selectors selects the element that has this ID on it (should only be once per page)

Class selector

CSS: .some-class { ... }

Would select this HTML element for example: <h1 class="some-class">...</h1>

This selector selects all HTML elements that have this class on them

Attribute selector (new)

CSS: [src] { ... }

Would select this HTML element for example: <img src="...">

This selector selects all elements that have this HTML attribute on them

Universal selector (new)

CSS: * { ... }

Would select this HTML element for example: <p>....</p><img ...>

This selector selects ALL HTML elements (directly, not through inheritance but as if you would target them all individually)

Grouping selector / selector list

CSS: p, .some-class { ... }

Would select this HTML element for example: <p>...</p><h2 class="some-class">...</h2>

This selector selects all elements that match the individual selectors in that list

Combined selector

CSS: p.some-class { ... }

Would select this HTML element for example: <p class="some-class">...</p>

This selector selects all elements that meet both conditions (i.e. "<p>" elements with "some-class" class on it, in this example)

Pseudo selector

CSS: a:hover { ... }

Would select this HTML element for example: <a>...</a> (when the user hovers over it)

This selector selects all elements that meet this "pseudo state" (i.e. all links that are hovered in this example)

Notes: https://github.com/academind/100-days-of-web-development/blob/04-html-css-first-practice-summary/extra-files/html-css-basics-summary.pdf 


## Deployment 

[Link](https://app.netlify.com/drop ) to qucikly depoly any app 
Adding my section 4 files to a section 5 folder to drop into the site. 
Like to my section 5 deployed site (Base template) https://100-days-code-section5.netlify.app/ 

<img width="1122" height="895" alt="image" src="https://github.com/user-attachments/assets/c2ea55c7-5e67-4725-b548-0ee64fafc276" />

How Netlify looks now - last deplyed a project in 2021, this is now what it looks like with the updates:
<img width="1512" height="895" alt="image" src="https://github.com/user-attachments/assets/6e1ab6f5-d108-45cc-925f-fe067f4be9cc" />
<img width="3024" height="1790" alt="image" src="https://github.com/user-attachments/assets/495ead92-5446-4cac-86b3-6b68e6b4ce95" />

## Favicon

We haven't added one yet so now we look into adding this image during this section of the course. 
[Link](https://favicon.io/emoji-favicons/cherry-blossom) to website for generating these icons for your site
https://100-days-code-section5.netlify.app/ 

```
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
```
<img width="953" height="923" alt="Screenshot 2026-03-07 at 16 08 29" src="https://github.com/user-attachments/assets/cc0fca34-ffbf-4b65-84b0-a94acf2d4ca1" />

I just used what he spoke about in the tutorial: 
`    <link rel="icon" href="/favicon.ico" type="image/x-icon">`

## Relative vs Absolute paths
<img width="550" height="551" alt="image" src="https://github.com/user-attachments/assets/d3586056-f1dc-42b8-95e9-9bac81454af2" />


## Git and Github 

I already have an account with Github - as seen with how I have done this repo etc. 

Adding [Git](https://git-scm.com/install/)

<img width="1173" height="618" alt="image" src="https://github.com/user-attachments/assets/db0e38e3-7e27-4812-89c3-8f3364f98f52" />

steps found online but I will continue with Github as it's not required for what I need currently but still went though this section to understand it. 

```
There are several options for installing Git on macOS. Note that any non-source distributions are provided by third parties, and may not be up to date with the latest source release.

Choose one of the following options for installing Git on macOS:

Homebrew
Install homebrew if you don't already have it, then:
$ brew install git

MacPorts
Install MacPorts if you don't already have it, then:
$ sudo port install git

Xcode Command Line Tools
Apple ships a binary package of Git with Xcode Command Line Tools. You can install this via:
$ xcode-select --install

Binary installer
Tim Harper provided an installer for Git until version 2.33.0 / 2021. These installers are no longer linked from here because there are no updates since that version, nor are there plans to provide any.

Installing git-gui
If you would like to install git-gui and gitk, git's commit GUI and interactive history browser, you can do so using homebrew
$ brew install git-gui
```

#### GUI vs CLI 

Graphical User Interface vs Command Line Interface

<img width="612" height="290" alt="image" src="https://github.com/user-attachments/assets/3f284427-c927-4cc1-8c27-daf17e7f4a18" />

MAC users use the Terminal which is z Shell

Terminal vs Finder folder 
<img width="983" height="910" alt="image" src="https://github.com/user-attachments/assets/00e5e439-e49e-49fe-b169-a9d38bea816b" />

```
pwd
/Users/rominalodolo
```

<img width="983" height="910" alt="image" src="https://github.com/user-attachments/assets/00df0b9d-1ce5-42be-a6fc-790d1051fe2e" />


Installing Git for demo purpose:
`$ brew install git`
<img width="739" height="706" alt="image" src="https://github.com/user-attachments/assets/cfa6420a-be8e-4102-a04c-49fa628237e7" />


Git basics: 
Working directory - your current folder 
Repositories, hidden but tracks changes here. It stores first verion then tracks the next states for these files. You do this with commits / they are new snapshots. Stored in master branches or any other branches you create. 


## New website build - Travel destinations 



## Introducing the "z-index" Property [Day 24]
The z-index - What & Why?
We learned about the document flow and how to change the default positioning of HTML elements with the position property.

By changing the default element position, you might come across a situation were one element is overlapping the other one and where you want to control, which element is positioned above the other.

For such cases, the z-index is required.

How does it work

The z-index , a CSS property, defines the z-order of a positioned element (i.e. an element with the position property applied with a value different than static). The z-order refers to the z-axis, so it controls how elements are stacked above it each other if applicable.

The default value for HTML elements is set to auto, which is aquivalent to 0. Positioned elements with a higher z-index are positioned above elements with a lower value for the z-index.

Code example

HTML

<body>
    <div id="first">Element 1</div>
    <div id="second">Element 2</div>
</body>
CSS

div {
    width: 200px;
    height: 200px;
    text-align: center;
    color: white;
}
 
#first {
    background-color: rgb(55, 117, 209);
}
 
#second {
    background-color: rgb(233, 137, 59);
}
By default, both elements follow the document flow, element 1 is displayed first, element 2 is displayed second, one after another.

Now add the following code to #second:

    position: absolute;
    top: 0;
    left: 0;
Element 2 is taken out of the document flow and displayed on top of element 1.

Adding z-index: 1 to #first does not change the order of the elements along the z-axis, as the z-index only has an impact on positioned elements, excluding the default value position: static.

Adding position: relative to #first, will display element 1 above element 2 again.


## Core Princaples: 

1. Don't get overwhelmed. Build one feature at a time. 
2. Less is more. Don't over style the site. 
3. Keep things clean. 

## Transiton
The transhttps://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transitionition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, transition-delay, and transition-behavior.

## Transfrom 

The [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transform) CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

