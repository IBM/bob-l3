# Next Edit Prediction and Tab Completion

![type:video](./_videos/2-1_next_edit_prediction.mp4)
!!! quote ""
    Maximilian Jesch *(Outbound Product Manager - IBM Bob)* showcases how to work with IBM Bob's tab completion and next edit predictions. *[1 min]*

<br/>

## Overview

Bob provides AI-assisted code completion through two integrated features: tab completion and next edit prediction. These features work together to accelerate development by suggesting code based on context and automatically navigating to likely edit locations.

---

## Tab Completion

### How It Works

Tab completion in Bob differs from traditional autocomplete by analyzing the entire codebase context, including:

- Comments describing intended functionality
- Existing code patterns and structure
- Project conventions and style
- Related code in other files

### Accepting Suggestions

When Bob suggests code:

- Press **Tab** to accept the suggestion
- Continue typing to override the suggestion
- The suggestion updates dynamically as you type

---

## Next Edit Prediction

### Feature Description

Next edit prediction anticipates where you'll need to make related changes after accepting a code suggestion. This feature recognizes that code modifications typically require updates in multiple locations.

### Navigation Workflow

1. Write a comment describing the desired functionality
2. Bob generates a code suggestion based on the comment
3. Press Tab to accept the suggestion
4. Press Tab again to jump to the next predicted edit location
5. Bob positions the cursor where the newly added code should be used
