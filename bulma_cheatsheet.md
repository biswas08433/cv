# Bulma Cheatsheet

## Columns
for layout purpose

```html
<div class="columns">
    <div class="column">
    ...
    </div>
    ...
    </div>
    ...
    </div>
</div>
```
- `columns is-gapless`: to remove the space between the columns
- `columns is-multiline`: to add more column elements than would fit in a single row
- `columns is-centered`: horizontal centering
- `columns is-vcentered`: vertical centering
---
- `column`: each column will have equal width
- `column is-(1..6)`: each modifier class is named after how many columns you want out of 12. So if you want 7 columns out of 12, use `is-7`
- `column <size-from below>`
    - `is-one-quarter` 25%
    - `is-half` 50%
    - `is-three-quarters` 75%
    - `is-full` 100%
    ---
    - `is-one-third` 33%
    - `is-two-third` 66%
    ---
    - `is-one-fifth` 20%
    - `is-two-fifths` 40%
    - `is-three-fifths` 60%
    - `is-four-fifths` 80%
- `column is-offset-(1..12)`: to create horizontal space around .column elements 


## Elements

1. `block`: allows sibling HTML elements to have a consistent margin between them
2. `box`: a simple container with a white background, some padding, and a box shadow
3. `button`
    - colors
        - `button is-(primary, link, info, success, warning, danger)`
    - sizes
        - `buttons are-(small, medium, big)`
        ---
        - `button is-(small, medium, big)`
    - layout
         - `buttons is-(left, centered, right)`
    - styles
        - `button is-outlined`
        - `button is-inverted`
        - `button is-rounded`
        - `button is-focused`
        - `button is-loading`
    - misc.
        - `field is-grouped`: use to group buttons on a single line
        - `field has-addons`: use buttons as addon
    ---
    - delete button
        - `delete`: add this class for a small delete button for tags, notification and messages
4. `content`:  single class to handle WYSIWYG generated content, where only HTML tags are available
    - size
        - `is-(small, normal, medium, large)`
    - ordered-list
        - `(1, A, a, I, i)`
5. `icon`: use a `span` element with this class
    - `icon-text`: combine an icon with text, using the icon-text wrapper, as long as all text inside is wrapped in its own span element
6. `image`
    - sizes
        - `image is-(16x16, 24x24, 32x32, 48x48, 64x64, 96x96, 128x128)`
        - `image is-rounded`
7. `notification`
    - colors
        - `notfication is-(primary, link, info, success, warning, danger)`
        - `notfication is-light`
8.  `progress`
    - colors
        - `progress is-(primary, link, info, success, warning, danger)`
    - sizes
        - `progress is-(small, normal, medium, large)`
9. `table`
    ```html
    <table class="table">
        <thead>Optional Top Part</thead>
        <tbody>
            <tr>
                <th>heading_1</th>
                <th>heading_2</th>
            </tr>
            <tr>
                <th>value_1</th>
                <th>value_2</th>
            </tr>
        </tbody>
        <tfoot>Optional Bottom Part</tfoot>
    </table>
    ```
    - `table is-bordered`
    - `table is-striped`
    - `table is-hoverable`
    - `table is-narrow`
    ---
    - `table-container`: scrollable table
    ---
    - `<tr> is-selected`

