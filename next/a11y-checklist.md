# WCAG 2.1 AA Checklist with Pa11y Coverage

## Perceivable

- [x] 1.1.1 Non-text Content (A) ✅ Automated
- [x] 1.2.1 Audio-only & Video-only (A) ✅ Automated
- [x] 1.2.2 Captions (Prerecorded) (A) ✅ Automated
- [x] 1.2.3 Audio Description (Prerecorded) (A) ✅ Automated
- [ ] 1.2.4 Captions (Live) (AA) ⚠️ Manual
- [ ] 1.2.5 Audio Description (Prerecorded) (AA) ⚠️ Manual
- [x] 1.3.1 Info & Relationships (A) ✅ Automated
- [ ] 1.3.2 Meaningful Sequence (A) ⚠️ Manual
- [x] 1.3.3 Sensory Characteristics (A) ✅ Automated
- [x] 1.4.1 Use of Color (A) ✅ Automated
- [x] 1.4.2 Audio Control (A) ✅ Automated
- [x] 1.4.3 Contrast (Minimum) (AA) ✅ Automated
- [x] 1.4.4 Resize Text (AA) ✅ Automated
- [x] 1.4.5 Images of Text (AA) ✅ Automated
- [ ] 1.4.10 Reflow (AA) ⚠️ Manual
- [ ] 1.4.11 Non-text Contrast (AA) ⚠️ Manual
- [ ] 1.4.12 Text Spacing (AA) ⚠️ Manual
- [ ] 1.4.13 Content on Hover or Focus (AA) ⚠️ Manual

## Operable

- [x] 2.1.1 Keyboard (A) ✅ Automated
- [x] 2.1.2 No Keyboard Trap (A) ✅ Automated
- [x] 2.1.4 Character Key Shortcuts (A) ✅ Automated
- [x] 2.2.1 Timing Adjustable (A) ✅ Automated
- [x] 2.2.2 Pause, Stop, Hide (A) ✅ Automated
- [x] 2.3.1 Three Flashes (A) ✅ Automated
- [x] 2.4.1 Bypass Blocks (A) ✅ Automated
- [x] 2.4.2 Page Titled (A) ✅ Automated
- [x] 2.4.3 Focus Order (A) ✅ Automated
- [x] 2.4.4 Link Purpose (In Context) (A) ✅ Automated
- [x] 2.4.5 Multiple Ways (AA) ✅ Automated
- [x] 2.4.6 Headings and Labels (AA) ✅ Automated
- [x] 2.4.7 Focus Visible (AA) ✅ Automated
- [x] 2.5.1 Pointer Gestures (A) ✅ Automated
- [x] 2.5.2 Pointer Cancellation (A) ✅ Automated
- [x] 2.5.3 Label in Name (A) ✅ Automated
- [x] 2.5.4 Motion Actuation (A) ✅ Automated

## Understandable

- [x] 3.1.1 Language of Page (A) ✅ Automated
- [x] 3.1.2 Language of Parts (AA) ✅ Automated
- [x] 3.2.1 On Focus (A) ✅ Automated
- [x] 3.2.2 On Input (A) ✅ Automated
- [x] 3.2.3 Consistent Navigation (AA) ✅ Automated
- [x] 3.2.4 Consistent Identification (AA) ✅ Automated
- [x] 3.3.1 Error Identification (A) ✅ Automated
- [x] 3.3.2 Labels or Instructions (A) ✅ Automated
- [x] 3.3.3 Error Suggestion (AA) ✅ Automated
- [x] 3.3.4 Error Prevention (AA) ✅ Automated

## Robust

- [x] 4.1.1 Parsing (A) ✅ Automated
- [x] 4.1.2 Name, Role, Value (A) ✅ Automated
- [x] 4.1.3 Status Messages (AA) ✅ Automated










# Extra Accessibility & Inclusive Web Tips

## Multilingual & Typography

- [ ] Ensure **correct language attributes** (`lang`) for every part of the page.
- [ ] Use **appropriate fonts for each script** (e.g., Latin vs. Cyrillic vs. Arabic) for readability.
- [ ] Consider **line height, letter spacing, and text size** differences for various writing systems.
- [ ] Avoid hard-coded text sizes—allow **user zoom** and **text scaling**.
- [ ] Support **right-to-left (RTL) layouts** for languages like Arabic and Hebrew.
- [ ] Provide **translation or simplified text options** when content is complex.

## Navigation & Interaction

- [ ] Ensure **keyboard accessibility** for all interactive elements.
- [ ] Maintain **consistent focus order** for better keyboard navigation.
- [ ] Provide **skip links** to jump to main content.
- [ ] Offer **multiple ways to navigate** (menu, search, links, breadcrumbs).
- [ ] Allow users to **customize interaction**: font size, contrast, spacing, color theme.
- [ ] Avoid hover-only interactions—ensure **tap/click equivalents** for touch users.

## Animations & Motion

- [ ] Provide **reduce-motion option** to respect OS preferences (`prefers-reduced-motion`).
- [ ] Avoid animations that **flash >3 times per second** (seizure risk).
- [ ] Ensure **animations don’t cause dizziness or nausea**.
- [ ] Avoid **auto-playing video/audio** without user control.

## Media & Content

- [ ] Provide **captions and transcripts** for audio/video.
- [ ] Use **descriptive alt text** for images; complex images may need **long descriptions**.
- [ ] Ensure **color is not the only cue**—combine with text or icons.
- [ ] Avoid **complex layouts that break on zoom or small screens**.

## Forms & Interactions

- [ ] Label all form fields clearly; use **`<label>` or `aria-label`**.
- [ ] Group related fields with **`<fieldset>` and `<legend>`**.
- [ ] Give **error messages that are clear and accessible**.
- [ ] Provide **confirmation or undo** options for destructive actions.

## Dynamic Content

- [ ] Use **ARIA live regions** to announce dynamic content changes.
- [ ] Avoid **unexpected pop-ups or modals** that steal focus.
- [ ] Ensure **custom widgets** expose correct ARIA roles, states, and properties.

## Testing & Validation

- [ ] Test with **screen readers** (NVDA, VoiceOver, JAWS).
- [ ] Test with **keyboard only** and without a mouse.
- [ ] Test with **different devices, screen sizes, and zoom levels**.
- [ ] Include **users with disabilities** in testing whenever possible.









