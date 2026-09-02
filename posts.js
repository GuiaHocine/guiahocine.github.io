// ==========================================================================
// Posts manifest
// ==========================================================================
// To publish a new post:
//   1. Copy posts/template.html -> posts/<your-slug>.html and write your content
//   2. Add a new entry to the array below (newest first)
//   3. That's it — writing.html picks it up automatically.
//
// Each entry:
//   date   : "YYYY-MM-DD"   shown next to the title
//   title  : "..."           clickable title of the post
//   file   : "posts/..."     relative path to the post HTML file
//   links  : [ ... ]         optional bracketed reference links
//                           (e.g. Twitter, Reddit, Code). Omit or set to []
//                           if there are none.
// ==========================================================================

var posts = [
    {
        date: "2026-09-01",
        title: "From next token prediction to task solver",
        file: "posts/llm_to_agent.html",
    },
    // Add more posts below, newest first:
    // {
    //     date: "2026-08-15",
    //     title: "Another Post Title",
    //     file: "posts/another-post.html",
    //     links: [
    //         { label: "Reddit", url: "#" },
    //         { label: "Code", url: "#" },
    //     ],
    // },
];
