**Design Documentation for the Floor Plan of the**

**4th Floor, Jishi Building, Jiading Campus, Tongji University**

**2350944 赵诣 2351273 邓语乐**

1. System Features and Objectives

This webpage is designed to provide users with a navigation tool for the 4th floor of the Jishi Building. It helps users quickly understand the purpose, personnel information, and spatial distribution of each room. The main features include:

* Room Overview: A floor plan that visually displays the relative positions of all rooms on the 4th floor of the Jishi Building.
* Room Details: By clicking on a room, users can view detailed information, including room number, room name, usage, personnel list, and photos.
* Keyword Search: Allows users to quickly locate rooms by entering keywords (e.g., room number, room name, or staff name).

**2. Design Details**

**2.1 Page Layout Design**

Top Navigation Bar:

* **Displays the system title and serves as the entry point for global navigation.**
* **Background color: light gray (#f8f9fa), contrasting with the main content area.**
* **Title text: center-aligned, sans-serif font for simplicity and readability.**
* **A bottom border distinguishes the navigation bar from the main content area.**

Main Content Area:

* **Uses absolute positioning to adjust the location, size, and rotation angle of each room based on the actual floor layout.**
* **Room styling includes black borders and dynamic zoom effects on hover to enhance user interaction.**
* **Clicking on a room triggers a popup displaying detailed room information, dynamically updated via JavaScript to show the room number, name, personnel list, and photos.**

Bottom Search Bar:

* **Allows users to quickly locate rooms by entering keywords.**
* **Input box width: 300px, with a green border that changes to dark green when focused.**
* **Search button:**
* **Background color: green, changing to dark green on hover.**
* **Clicking the button triggers the search logic, implemented with JavaScript, to locate the target room and scroll to its position.**

**2.2 Dynamic Interaction Design**

Room Hover Effect:

* **When the mouse hovers over a room, the room dynamically enlarges, simulating natural interaction. This effect is implemented using CSS transitions with a smooth transition time of 0.1s.**

Room Click Event:

* **Clicking on a room dynamically generates a room details popup via JavaScript.**
* **The popup includes a close button (a red circular button with an "×" symbol) in the top-right corner. Clicking the close button hides the popup smoothly using opacity and transform properties and removes the popup element to prevent page clutter.**
* Search Interaction:
* **After entering a keyword in the search box, clicking the search button triggers the search event.**
* **The search logic iterates through all room information to determine if the keyword matches the room number, name, or personnel list.**
* **If a matching room is found, the showInfo method is called to display room details and scroll to the corresponding room's position.**
* **If no match is found, a "No information found" message is displayed in the search results area.**

**2.3 Floor Plan Design**

* A roomsPosition object in JavaScript defines the absolute position (top and left), size (width and height), and rotation angle (rotation) of each room.
* The values for position and size are based on the actual proportions of the floor plan, adjusted for precise alignment.

**2.4 Technical Implementation Details**

* HTML Structure:
* **The floor plan area uses absolutely positioned div elements to represent each room.**
* **Separate containers for the search bar and room details area allow for dynamic content updates.**
* CSS Styling:
* **The main structure layout is implemented using flexbox for adaptive layout distribution of the floor plan and details section.**
* **Dynamic interaction effects, such as room zoom and popup animations, are implemented using CSS transitions.**
* JavaScript Logic:
* **On page load, JavaScript iterates through the roomsPosition object to dynamically generate room elements and add them to the floor plan container.**
* **Clicking on a room calls the showInfo function to display room details.**
* **If the room contains teacher information, hyperlinks are generated to allow users to navigate to teacher details pages.**
* **When the user enters a keyword, the roomInfo object is traversed to find rooms containing the keyword. If a match is found, the page scrolls to the corresponding room and displays its details.**

**2.5 Interaction and User Experience Optimization**

* Visual Feedback:
* **Real-time visual feedback is provided when the mouse hovers over or clicks on a room (e.g., room zooming and background color changes).**
* Popup Details:
* **Room details are displayed in a popup, allowing users to quickly access information without disrupting the floor plan view.**
* Fuzzy Search:
* **The search function supports fuzzy matching, enabling users to find target rooms without needing to input precise room numbers or names.**

**3. Justifications Based on Fluid Navigation Principles**

**The design leverages** Fluid Navigation **principles, emphasizing smoothness and responsiveness to provide intuitive navigation and interaction. Key elements of the design demonstrate these principles:**

* Flexibility and Intuitiveness:

Floor Plan Display: **The system uses a floor plan to show room distribution. Users can click on rooms to view details, eliminating the need to memorize complex room numbers and enabling quick navigation.**

Zoom Interaction Effect: **When hovering over a room, the dynamic zoom effect provides immediate visual feedback, helping users confirm their cursor position. Popups respond instantly to mouse movements, displaying relevant information and creating a "live" interface.**

* Ease of Use and Consistency:

Top Navigation Bar: **The navigation bar is simple and clear, emphasizing the system's primary function.**

Room Details Popup: **Details are displayed in a popup to avoid cluttering the floor plan, with a close button for easy dismissal.**

Search Functionality: **The fixed bottom search bar allows users to query target rooms at any time. The consistent layout ensures usability across devices.**

* Seamless Navigation and Interaction:

Integration of Floor Plan and Details: **Clicking on a room links to detailed information, enabling users to switch seamlessly between the floor plan and room details.**

Search and View Integration: **After entering a keyword, the system scrolls to the corresponding room and displays its details, reducing user effort.**

* User Experience Optimization:

Visual Simplicity: **The page design is clean, focusing on the map and search features for efficiency. The layout is clearly divided into the header, map, and interaction elements to help users locate information quickly.**

Information Hierarchy: **Basic room information (e.g., room number and purpose) and detailed information (e.g., personnel list and photos) are layered to enable quick access to key details.**

**4. Conclusion**

This webpage design features a well-structured layout and interaction design, achieving the following goals by incorporating Fluid Navigation principles:

* Providing an intuitive and flexible room navigation experience.
* Meeting diverse user needs with a combination of a floor plan, dynamic interactions, and search functionality.
* Ensuring consistency in interface design and efficiency in information delivery.

The application of Fluid Navigation principles not only enhances the user-friendliness and usability of the interface but also significantly improves the smoothness of interactions between users and the webpage.