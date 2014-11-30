<?php

// Plugin definition
$plugin = array(
  'title' => t('<%= name %>'),
  'category' => t('<%= category %>'),
  'icon' => '<%= _.slugify(id) %>.png',
  'theme' => '<%= module %>_<%= id %>',
  'css' => '<%= _.slugify(id) %>.css',
  'admin css' => 'admin-<%= _.slugify(id) %>.css',
  'regions' => array(
    <%_.forEach(regions, function (name) {%> '<%= _.underscored(name) %>' => t('<%= _.trim(name) %>'),
    <% }); %>
  ),
);
