page_ninja
==========

Rails Engine  that manages static pages in dynamic mode

Project goal
============
We planned this project having the following goals in mind

* Facilitate naive users to customize static pages (i.e. about us, contacts) is an initiative way
* Separate view template from the data displayed, so that it becomes easy to change the template


Task list
==========
1. page generator that will create a yml file with sample data
1.1 parameters:  page nane, page template from built in list
1.2 block in yml file:

    block_name:
      meta:
        type:array
      data:


2. route to visit the generated pages