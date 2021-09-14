function CheckBox({className, ...props}) {
  return (
    <div className={className}>
      <input
        {...props}>
      </input>
      <label htmlFor="isLiked">
        FAVOURITE SONGS
      </label>
    </div>
  );
}

export default CheckBox;