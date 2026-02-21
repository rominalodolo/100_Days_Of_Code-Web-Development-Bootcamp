# 100_Days_Of_Code-Web-Development-Bootcamp
>
> 100 Days Of Code - Web Development Bootcamp by Maximilian Schwarzmüller Udemy Course. 
>
>[Link to course](https://www.udemy.com/course/100-days-of-code-web-development-bootcamp)
>


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

You can use the special <pre>...</pre> tags (for "preformatted text") - these tags wrap any text (that may include HTML code) and "tell the browser" to output it as plain text (i.e. NOT interpret it as HTML code). When using <pre>, whitespace is also preserved and NOT ignored (as it normally would be)

Alternatively, if you simply want to output the "<" character (e.g. in some math formula that should be shown on your page), you can use some special "shortcuts" (so-called "HTML entities") in your HTML code:

E.g. if you write &gt; in your HTML code, the browser will output the ">" (greater than) symbol

`&lt; => "<" `(lower than)





