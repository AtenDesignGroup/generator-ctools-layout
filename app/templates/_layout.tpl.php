<?php
/**
 * @file
 * Template for <%= name %> layout.
 *
 */
?>

<%_.forEach(regions, function (name) {%>
<?php if ($content['<%= _.underscored(name) %>']): ?>
  <?php print $content['<%= _.underscored(name) %>']; ?>
<?php endif; ?>
<% }); %>

