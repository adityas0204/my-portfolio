# My Portfolio & Dev Playground

This project is an evolving technical playground used to explore web development and modern deployment workflows. It serves as a live environment where I test and implement new technologies as I learn them.

## Evolution of the Project

This repository has gone through several distinct phases:

* **Documentation Start**: It originally began as a simple experiment to host and organize personal notes on full-stack development.
* **Portfolio Transition**: I later evolved the project into a professional portfolio to showcase my work and skills.
* **Styling Overhaul**: I transitioned the entire codebase from traditional monolithic CSS (preserved in index.css) to a utility-first approach using Tailwind CSS for better design control and mobile responsiveness.

## Tech Stack

* **Frontend**: React 19
* **Styling**: Tailwind CSS 4.0
* **Backend/Hosting**: Firebase (Hosting & CLI)

## Current Focus & Roadmap

Because this project is built for continuous learning, I am currently working on and planning the following:

* **Logging**: Implementing logging systems to track application behavior and debug more efficiently.
* **SEO Research**: Exploring Search Engine Optimization to understand how to make web applications more discoverable and performant for search engines.
* **New Features**: Regularly experimenting with new visual designs and advanced CSS techniques to push the limits of the site's interface.

## Logging Documentation

I will be documenting my process of creating a custom logging service to measure metrics related to my site, which I have not decided at the moment of writing this.

I spent a day creating my server. I used express and mongoose. I had a few bugs here and there but I was able to figure them out fairly smoothly. I think most of the work I will be doing on the server will be figuring out what my models should look like, since I haven't decided what I want to really log yet. 

An issue that i've encountered is that I can't use firebase to host my server. Firebase hosting only hosts static sites. Firebase has functions as well, but I won't be able to use MongoDB. Maybe I can use Amazon AWS instead if they have a student discount or free credits, but I'll look into this later.

I've also created a connection from my frontend to my server. Since I'm using REST API's, I use axios to send put requests. Currently, I'm calling them pings, and I've made it so that a ping is sent when a person visits my site by using React's `useEffect` hook in my app . This hook will come in handy again if I want to send pings on an time interval basis. 

While doing this I also found a silly bug; I used `PUT` instead of `POST` in my axios method call, causing my backend to not recgonize the HTTP request and retuning 404. 

Now that I've figured out how to connect my frontend to my backend, I need to etermine what I want to actually log. So far, I've got a few ideas:
- Unique visitors
- Time spent on my site
- Which type of device they connect from
- How many times they hover links in the home page 
  - They have a cool animation that I'm proud of ykwim
- Maybe how far they scroll as well

These requirements will change depending on what new things I think of or encounter as I research this topic.

I have some idea for how I should create my models:

```json
{ 
    ip: string
    visit: {
        date: string
        visitLength: int
        homeUrlHoverCount: int
        scrollDistance: string
    }
}
```

A lot of this information can not be determined from one individual ping being sent. For example, the `visitLength` would have to be two pings, one for when they launch the site and another for when they close the page or maybe swap windows. I'm thinking that maybe every visit has an ID that gets sent from the server to the client, which the client can use in its future requests. Instead of `scrollDistance` being a string it could be a set for which parts of the page they visit. A set would prevent duplicates and be easier to manage. The client could also have a copy of the set and if the client visits a new section of the site then local set copy updates, after which the client can make a request to update the server's copy. 

The `homeUrlHoverCount` could be counting locally, and then when the connection is terminated it can send the updated copy in the same request as the `visitLength` one. Infact, I think we can store all this data locally, and then we can send a request to the server when the webpage is being closed. I'm not sure how we would manage a person who has the site open in the background. Maybe we send a request to the server when they switch tabs and close the tab. If someone is idling, then maybe we send a request every five minutes. We need to ensure that we only make as many pings as we need to, to stay efficient and potentially cost efficient.

After presenting my plan to an LLM and hearing its input, I've landed on a good scheme. Also, we will be storing hashes of ip addresses for security reasons, but I don't think anyone will be hacking into my db. This will just be a little more experience. 

New schema:

```json
{
    id: int (generated by MongoDB)
    hashedIp: string,
    device: string,
    timings: {
        start: date,
        lastPing: data,
        durationSec: int
    },
    interactions: {
        hoverCount: int,
        scrollMilestones: [string]
    }, 
}
```

I started coding this, adding the route for `PUT` and then I saw a method called `findByIdAndUpdate`. It's an atomic method where I can use MongoDB methods like `$inc` and `$set`. The idea now is to send all non atomic data in the first `POST`  request thats made, and then send `PUT` methods with codes like `HOVER` or `PING` in the request body to indicate that we need to increment the `hoverCount`. This will also eliminate race conditions as I won't go back and forth between MongoDB two times. 

I got the hover pings to work. I had to use `ref`s so that the values wouldn't be lost over React renders. I also did not want to send an update every time the user hovers so I used two `ref`s; one `ref` to start a timer, and another to act as a buffer and count the number of hovers performed in that time. 

For the scroll tracking, I used a custom hook alongside an `IntersectionObserver`. This is a really cool built in API that lets me easily check if my target, as in the component I want to check, is present on the screen. I used a `ref` to pass the DOM element that I wanted to target into the hook by attaching it to the div:

```js
<footer ref={scrollRef} ...>
    ...
</footer>
```

I attached the hook onto every component I wanted to track.

Then, I ran into an issue. If I launched the site, then the `createPing` wouldn't be processed in time for the home screen to send an `updateLog` for the screen tracking. To manage this race condition I set the promise inside of `createPing` to a variable declared outside of the function. `updateLog` could then check if that promise existed, and if it did then it would `await` it, pausing the execution of `updateLog` until the promise had beed fulfilled. This can be seen in `/client/src/services/ping`.

Setting up the `HEARTBEAT` pings was very easy. I used a `setInterval` callback function that would simply call `updateLog` every 30 seconds. However, I ran into a weird Mongoose problem where my query to update `timings.durationSec` in my backend wasn't being allowed due to Mongoose getting confused. I found a Stack Overflow thread that said the solution was to access MongoDB's collections through the Mongoose objects to bypass Mongoose's security checks. That ended up being the fix.

## Deployment Documentation