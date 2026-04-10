---
sidebar_position: 16
---

# AI Notes

## Overview

AI Notes is a note-taking application on DASSET that offers the ability to create text, voice and media notes.  Notes are stored on the DASSET device and can be accessed from any device running the DASSET application.

Click the **Note** icon on the left navbar to enter the application.

![](../pc-images/image244.png)

1.  **Notebooks:** Create, rename, and delete notebooks.
2.  **Note Display:** Shows all notes stored in the selected notebook.
3.  **Waste Paper Basket:** Deleted notes and notebooks are temporarily stored here.
4.  **Note Settings:** By default, notes are saved on your local computer. You can choose to sync them to your DASSET device.
5.  **Recording:** Uses the computer's microphone to record audio. After recording, a new note with the audio file will be created in the selected notebook.
6.  **New Note:** Creates a new note in the selected notebook.

:::note
Markdown syntax content can be copied directly into a note while retaining its original format.
:::

## Notebook Management

Multiple notebooks are supported to help organize your knowledge.

![](../pc-images/image245.png)

- **Create Notebook:** Click the plus sign (+) to create a new notebook.
- **Manage Notebook:** Right-click a selected notebook to rename or delete it.

:::warning
Deleting a notebook will also delete all notes inside it. Restoring a deleted note from the Trash will also restore its associated notebook.
:::

## Note Management

When you select a notebook, all notes stored inside it are displayed in the notes window.

### Note Status
If note synchronization is enabled, each note will show its current sync status in the top-right corner:
- ![](../pc-images/image246.png)Waiting to sync
- ![](../pc-images/image247.png)Sync complete
- ![](../pc-images/image248.png)Sync in progress

![](../pc-images/image249.png)

### Audio Notes
Click Record to start recording. Once recording is finished, a new note containing the audio file will be created automatically.

1.  **Stop Recording:** Ends the recording and saves the audio file in the new note.
2.  **Start/Pause Recording:** Allows you to pause and resume recording.
3.  **Exit:** Cancels the current recording.

![](../pc-images/image250.png)

### Note Editing
Notes support rich text editing as well as basic formatting:

![](../pc-images/image251.png)

1.  Set document structure, including Heading 1/2/3 and body text.
2.  Format text with bold, italic, underline, and strikethrough.
3.  Undo/Redo: Cancel the current edit, or restore what was just undone (only available if no further actions have been taken after the undo)
4.  Create to-do items, which can be marked as Completed.
5.  Insert media files, including pc-images and videos. pc-images can be pasted directly from copied files or screenshots.
6.  Insert audio files.
7.  Start live audio recording.
8.  Edit note title.
9.  Edit note body.

#### Supported formats:
- **Audio:** mp3, wma, flac, wav, aac, ape, m4a, ogg
- **Images:** gif, jpg, png, jpeg
- **Videos:** avi, flv, mov, mkv, mp4, wmv

### Right-Click Menu in Note Editor
While editing a note, you can right-click to perform various actions:

![](../pc-images/image252.png)

1.  **Cut:** Remove selected content.
2.  **Copy:** Copy selected content.
3.  **Paste:** Insert copied content.
4.  **Select All:** Select the entire content of the note.
5.  **Translation:** Use the AI Agent to translate selected content into Chinese, English, or Japanese.
6.  **Organize Delegated Tasks:** Use the AI Agent to convert selected content into a to-do list.
7.  **Summarize:** Use the AI Agent to generate a summary of selected content.
8.  **Generate Blog:** Use the AI Agent to create blog-ready text from selected content.

### Note Management from the List Page
On the notes list page, you can right-click a note to perform the following actions:

![](../pc-images/image253.png)

1.  **Move To:** Move the note to another notebook.
2.  **Top:** Pin the note at the top of the current notebook.
3.  **Copy:** Copy the note to another notebook.
4.  **Delete:** Remove the note.

## Search
Enter keywords in the search bar to quickly locate the notes you need.

![](../pc-images/image254.png)

## Notes AI Agent

The Notes feature includes multiple AI Agent capabilities that can be invoked at any time to improve efficiency.

### Image Analysis
You can use the Image Understanding function to generate AI-based descriptions of pc-images in a note.
1.  Right-click on an image and select **Image analysis**.

![](../pc-images/image255.png)

2.  The DASSET AI Agent will analyze the image automatically.

![](../pc-images/image256.png)

3.  Once complete, the AI Agent generates descriptive text. You may then:
    * **Save as Note:** Store the generated description as a new note.
    * **Insert Text:** Insert the generated description into the current note.
    * **Re-recognition:** If the description is unsatisfactory, run the analysis again for a new result.

![](../pc-images/image257.png)

### Text Translation
The Text Translation function allows AI to translate selected text into other languages. Currently supported: Chinese, English, and Japanese.
1.  Highlight text, then **right-click  Translation  select target language**.

![](../pc-images/image258.png)

2.  The DASSET AI Agent will translate the text.
3.  After translation, you may:
    * **Save as Note.**
    * **Insert Text into the current note.**
    * **Re-run for a new translation.**

![](../pc-images/image259.png)

### Organize Delegated Tasks
AI can convert selected text into structured to-do items.
1.  Highlight text, then **right-click  Organize Delegated Tasks.**

![](../pc-images/image260.png)

2.  The AI Agent processes the text and generates a list of tasks.
3.  Once generated, you may:
    * **Save as Note.**
    * **Insert Text into the current note.**
    * **Re-run for a new result.**

![](../pc-images/image261.png)

### Summarization
AI can summarize selected text into concise content.
1.  Highlight text, then right-click **Summarize.**

![](../pc-images/image262.png)

2.  The AI Agent processes the text and generates a summary.
3.  Once complete, you may:
    * **Save as Note.**
    * **Insert Text into the current note.**
    * **Re-run for a new result.**

![](../pc-images/image263.png)

### Blog Generation
AI can transform selected text into short blog-ready content for social media.
1.  Highlight text, then right-click  Generate Blog.

![](../pc-images/image264.png)

2.  The AI Agent processes the text and creates a draft blog.
3.  Once complete, you may:
    * **Save as Note.**
    * **Insert Text into the current note.**
    * **Re-run for a new result.**

![](../pc-images/image265.png)

### Speech Recognition
You can convert audio files inserted into notes into text using Speech Recognition.
:::note
This function supports speaker identification based on different voice tones. Accuracy may vary depending on audio quality.
:::
1.  Click **To Text** on the audio file.

![](../pc-images/image266.png)

2.  The AI Agent will identify speakers and transcribe the audio.
3.  Once complete, you may:
    * **Save as Note.**
    * **Insert Text into the current note.**
    * **Re-run for a new transcription.**

![](../pc-images/image267.png)

### EXAMPLE USE CASE: Meeting Minutes
By combining multiple AI Agent functions, you can create structured meeting summaries. Example workflow:
1.  Insert the meeting recording file into a note.
2.  Select Speech Recognition to transcribe the audio.

![](../pc-images/image266.png)

3.  Insert the transcription into the note.

![](../pc-images/image268.png)

4.  Highlight the transcription text, then select Summarize.

![](../pc-images/image269.png)

5.  Save or re-run the AI Agent to produce the final meeting summary.

![](../pc-images/image270.png)

## Waste Paper Basket
All deleted notes are stored in the **Waste Paper Basket**:
- **Restore:** Recover notes back to their original notebook.
- **Delete:** Permanently remove notes.
Multiple notes can be selected for batch restore or batch deletion.

![](../pc-images/image271.png)

## Notes Settings (Configure Synchronization)
When synchronization is enabled, all your notes will remain consistent across your computer and the DASSET device.
- **Sync Target**: Select the DASSET device where you want to synchronize your notes.
- **Conflict Handling Policy**: Define how to handle conflicts when note data differs between your computer and the DASSET device.
  - **Local overrides NAS**: Notes on the computer will be uploaded and overwrite notes on the DASSET device. The local notes are treated as the only reliable source of data.
  - **NAS device overrides Local**: Notes on the DASSET device will be downloaded and overwrite notes on the computer. The NAS-stored notes are treated as the only reliable source of data.

:::tip
If you are the sole user of your DASSET account and you do not edit the same notes on multiple devices simultaneously, it is suggested to select **Local Overwrites NAS**.
:::

![](../pc-images/image272.png)