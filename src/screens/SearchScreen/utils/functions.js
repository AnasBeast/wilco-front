export const searchFunction = (text,masterDataSource) => {
     if (text) {
        const newData = masterDataSource.filter(
          function (item) {
            const username = item?.pilotName;
            console.log(username)
            const itemData = username
              ? username.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        return newData;
      } else {
        return masterDataSource;
      }
}