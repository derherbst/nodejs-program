"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAutoSuggestUsers = (data, loginSubstring, limit) => {
    const sortedByLoginData = data.sort((a, b) => a.login.toLowerCase().localeCompare(b.login.toLowerCase()));
    const filteredByLoginSubstring = sortedByLoginData.filter((user) => user.login.includes(loginSubstring));
    const limetedUsersCollection = filteredByLoginSubstring.slice(0, limit);
    return limetedUsersCollection;
};
exports.checkIfLoginAvailable = (data, login) => {
    if (data && data.length === 0) {
        return true;
    }
    console.log("DATA", data);
    console.log("login", login);
    const result = data.some(user => user.login === login);
    console.log(result);
    return !result;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFYSxRQUFBLG1CQUFtQixHQUFHLENBQUMsSUFBMEIsRUFBRSxjQUFzQixFQUFFLEtBQWEsRUFBRSxFQUFFO0lBQ3JHLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFHLE1BQU0sd0JBQXdCLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLE1BQU0sc0JBQXNCLEdBQUcsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV4RSxPQUFPLHNCQUFzQixDQUFDO0FBQ2xDLENBQUMsQ0FBQTtBQUVZLFFBQUEscUJBQXFCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFXLEVBQUU7SUFDMUQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDM0IsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRzVCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBRXZELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUNuQixDQUFDLENBQUEifQ==