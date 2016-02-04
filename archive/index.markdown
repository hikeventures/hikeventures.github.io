---
layout: page
title: Archive
navbar: Archive
date: 2012-11-25 17:43
comments: false
sharing: false
footer: false
---
<h1>Archive of posts from {{ page.date | date: "%B %Y" }}</h1>

<ul class="posts">
{% for post in page.posts %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
