pragma solidity ^0.8.11;

//VSCode might show error for imports 
//Change vscode setting "solidity.packageDefaultDependenciesDirectory":"blockchain/node_modules"
import "@openzeppelin/contracts/access/Ownable.sol"; 


contract project is Ownable {

    error maxProjectsReached(); 

    enum Feedback{GOOD, BETTER, BEST, LEGENDARY}

    uint public maxNumProjects = 56;
    uint public currentProjects = 0;

    struct projectDetails {
        uint projectId;
        string problemStatement;
        string studentName;
        Feedback fb;
    }

    mapping(uint=>projectDetails) data;

    event projectAdded(uint projectId, string problemStatement, string studentName);

    //Any one can add the projectDetails for now.
    // Once all projects are added the function will throw error.
    function addProject(string memory problemStatement, string memory studentName) public {
        if (currentProjects == maxNumProjects) {
            revert maxProjectsReached();
        }
        data[currentProjects].projectId = currentProjects;
        data[currentProjects].problemStatement = problemStatement;
        data[currentProjects].studentName = studentName;
        currentProjects++;
        
        emit projectAdded(currentProjects, problemStatement, studentName);
    }
    // Only DAO can add feedback
    function addVotes(uint projectId, Feedback fb) public onlyOwner {
        data[projectId].fb = fb;
    }

}