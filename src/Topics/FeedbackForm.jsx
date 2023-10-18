import React, { useState } from "react";

const FeedbackForm = () => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

const handleSubmit = (e) => {
    e.preventDefault()
    if(score <= 5 && comment.length <= 10) {
        alert('Please provide a detailed explaination of the issue')
        return;
    }
    console.log("Form Submitted");
    setComment("")
    setScore('10')
}
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className="Field">
            <label>Score : {score} 	&#11088;</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Comment</label>
            <textarea value={comment} onChange={e => setComment(e.target.value)}/>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  );
};

export default FeedbackForm;
