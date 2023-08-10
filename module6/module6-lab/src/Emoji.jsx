import { useState } from "react";

function Emoji() {

  let[emojiIndex, setEmojiIndex] = useState(0)
  let emojiArray = ["😀", "🙁", "😂", "😺", "💣"]

    function handleEmojiClick() {
      // if (emojiIndex == emojiArray.length) {
      //   emojiIndex = 0

      // }

      emojiIndex=emojiIndex+1
      setEmojiIndex(emojiIndex)
      console.log(emojiIndex)
    }

  return (
    <div>
      <p>
        <span>{emojiArray[emojiIndex]}</span>
      </p>
      <button type="button" onClick={()=> handleEmojiClick()}> Change Emoji </button>
    </div>
  );
}

export default Emoji;
