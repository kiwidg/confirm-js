
(Disclaimer : This module is mainly a pretext to discover modules for jQuery, and Github. JS Confirm modules are way [too mainstream](https://github.com/search?l=JavaScript&q=confirm&type=Repositories&utf8=%E2%9C%93).)

## Simple confirm tool

Use it to ask confirmation before deleting an item with an ajax request.

### Dependencies

You'll need jQuery and Bootbox. (tested with jQuery 1.7.1 and [Bootbox](https://github.com/makeusabrew/bootbox/releases) 3.3.0) 

@TODO : update for latest versions of jQuery and Bootbox...

### Usage

The easiest way is to add `data-confirm-target`, `data-confirm-name` and `data-confirm-id` on the button to delete the element with a custom class (`confirm` for instance), and `data-confirm-id` on the element to hide after deletion, with another custom class (`confirm-hide` by default).

Then, after having imported the jQuery and Bootbox files, juste do :

```
<script type="text/javascript">
$(document).ready(function() {
        $('.confirm').confirm();
});
</script>
```

You can override the `confirm-hide` class by using the option removeClass :
`$('.confirm').confirm({removeClass: "myclass"});`.

This code is under [WTFPLv2 License](http://www.wtfpl.net/txt/copying/).
