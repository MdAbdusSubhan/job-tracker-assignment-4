const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const secondCount = document.getElementById("second-count");


const jobList = document.getElementById("job-list");
const interviewList = document.getElementById("interview-list");
const rejectedList = document.getElementById("rejected-list");
const allJobs = document.querySelectorAll(".jobCard");

const allContainer = document.getElementById("allJob-container")
const interviewContainer = document.getElementById("interview-container")
const rejectedContainer = document.getElementById("rejected-container")

function updateCounts() {
    totalCount.innerText = jobList.children.length;
    interviewCount.innerText = interviewList.children.length;
    rejectedCount.innerText = rejectedList.children.length;

    if (!allContainer.classList.contains("hidden")) {
        secondCount.innerText = jobList.children.length;
    } else if (!interviewContainer.classList.contains("hidden")) {
        secondCount.innerText = interviewList.children.length;
    } else if (!rejectedContainer.classList.contains("hidden")) {
        secondCount.innerText = rejectedList.children.length;
    }
}


// toggle button


function toggleBtn(id) {
    const btnAll = document.getElementById("btnAll");
    const btnInterview = document.getElementById("btnInterview");
    const btnRejected = document.getElementById("btnRejected");
    

    btnAll.classList.remove("bg-[#3B82F6]", "text-white");
    btnInterview.classList.remove("bg-[#3B82F6]", "text-white");
    btnRejected.classList.remove("bg-[#3B82F6]", "text-white");

    const clickedBtn = document.getElementById(id);

    clickedBtn.classList.add("bg-[#3B82F6]", "text-white");
    clickedBtn.classList.remove("text-gray-600");


    allContainer.classList.add("hidden");
    interviewContainer.classList.add("hidden");
    rejectedContainer.classList.add("hidden");

    if (id == "btnAll") {
        allContainer.classList.remove("hidden");
        updateEmpty();
        updateCounts();
    } else if (id == "btnInterview") {
        interviewContainer.classList.remove("hidden");
        updateEmpty();
        updateCounts();
    } else if (id == "btnRejected") {
        rejectedContainer.classList.remove("hidden");
        updateEmpty();
        updateCounts();

    }



};

toggleBtn("btnAll");


function updateEmpty() {


    const allEmpty = document.getElementById("all-empty");
    const interviewEmpty = document.getElementById("interview-empty");
    const rejectedEmpty = document.getElementById("rejected-empty");

    if (jobList.children.length === 0) {
        allEmpty.classList.remove("hidden");
    }
    else {
        allEmpty.classList.add("hidden")
    };

    if (interviewList.children.length === 0) {
        interviewEmpty.classList.remove("hidden");
    }
    else {
        interviewEmpty.classList.add("hidden")
    };

    if (rejectedList.children.length === 0) {
        rejectedEmpty.classList.remove("hidden");
    }
    else {
        rejectedEmpty.classList.add("hidden")
    };

};


const btnCardInterview = document.querySelectorAll(".btn-card-intervew");

for (let i = 0; i < btnCardInterview.length; i++) {
    btnCardInterview[i].addEventListener("click", function (event) {

        const card = this.parentNode.parentNode.parentNode;

        const companyName = card.querySelector("h2").innerText;

        const existingInterviewCard = Array.from(interviewList.children)
            .find(card => card.querySelector("h2").innerText === companyName);

        const existingRejectedCard = Array.from(rejectedList.children)
            .find(card => card.querySelector("h2").innerText === companyName);

        if (existingInterviewCard) {
            existingInterviewCard.remove();
        }
         if (existingRejectedCard) {
            existingRejectedCard.remove()
        }

        const status = card.querySelector(".status");
        status.innerText = "Interview";
        status.classList.remove("bg-[#EEF4FF]", "bg-red-200", "bg-green-200");
        status.classList.add("bg-green-200");

        const clone = card.cloneNode(true);

        interviewList.appendChild(clone);

        const cloneBtn = clone.querySelector(".btn-card-rejected");
        cloneBtn.disabled = true;
        cloneBtn.classList.add("opacity-50", "cursor-not-allowed")

        const cloneBtn2 = clone.querySelector(".btn-card-intervew");
        cloneBtn2.disabled = true;
        cloneBtn2.classList.add("opacity-50", "cursor-not-allowed")


        updateCounts()

    })


}



const btnCardRejected = document.querySelectorAll(".btn-card-rejected");

for (let i = 0; i < btnCardRejected.length; i++) {
    btnCardRejected[i].addEventListener("click", function (event) {

        const card = this.parentNode.parentNode.parentNode;

        const companyName = card.querySelector("h2").innerText;

        const existingInterviewCard = Array.from(interviewList.children)
            .find(card => card.querySelector("h2").innerText === companyName);

        const existingRejectedCard = Array.from(rejectedList.children)
            .find(card => card.querySelector("h2").innerText === companyName);

        if (existingInterviewCard) {
            existingInterviewCard.remove();
        }
         if (existingRejectedCard) {
            existingRejectedCard.remove()
        }

        const status = card.querySelector(".status");
        status.innerText = "Rejected";
        status.classList.remove("bg-[#EEF4FF]", "bg-red-200", "bg-green-200");
        status.classList.add("bg-red-200");

        const clone = card.cloneNode(true);

        rejectedList.appendChild(clone);

        const cloneBtn = clone.querySelector(".btn-card-rejected");
        cloneBtn.disabled = true;
        cloneBtn.classList.add("opacity-50", "cursor-not-allowed")

        const cloneBtn2 = clone.querySelector(".btn-card-intervew");
        cloneBtn2.disabled = true;
        cloneBtn2.classList.add("opacity-50", "cursor-not-allowed")

        updateCounts()

    })


}

document.addEventListener("click", function(event){

    if(event.target.classList.contains("fa-trash-can")){

        const card = event.target.parentNode.parentNode.parentNode;

        card.remove();

        
        updateCounts()
        updateEmpty()
    }

});

document.addEventListener("click", function(event){

    if(event.target.classList.contains("btn-delete")){

        const card = event.target.parentNode.parentNode;

        card.remove();

        
        updateCounts()
        updateEmpty()
    }

});