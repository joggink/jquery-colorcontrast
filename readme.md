jQuery color contrast
=====================================================================================
The purpose of this plugin
-------------------------------------------------------------------------------------
Defining the text color by using the background-color or background-image colors as a 
reference. To do so we use the function defined by the WAI working group:
> (This is a suggested algorithm that is still open to change.)
> Two colors provide good color visibility if the brightness difference and the color difference between the two colors are greater than a set range.
> 
> Color brightness is determined by the following formula:
> ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
> Note: This algorithm is taken from a formula for converting RGB values to YIQ values. This brightness value gives a perceived brightness for a color.
>
> Source: [W3 WAI working group - Techniques For Accessibility Evaluation And Repair Tools][w3]


[w3]: http://www.w3.org/WAI/ER/WD-AERT/#color-contrast