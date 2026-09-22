const fetchContetnt = async () => {

    const contentArea = document.getElementById("content")

    try {
        const response = await fetch("/demo", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        console.log(data);
    } catch (error) {
        contentArea.innerHTML = `
        <div class="fixed inset-0 flex items-center justify-center">
            <div class=" p-4 rounded-md mx-4 flex flex-col items-center gap-8">
                <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eHlubmF0em9tNml0M2RhZmo4Y2VxNG96OWs4YXF1cDNydnlqc2QycCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ch67rqHED7Ue8mKupV/giphy.gif"
                    alt="sorry" class=" w-[50%] aspect-square">
                <div class="flex flex-col w-full ">
                    <h1 class="text-2xl font-bold text-warp text-center text-red-500">ระบบขัดข้อง</h1>
                    <h2 class=" font-bold text-center">กรุณาติดต่อองค์การนักศึกษา</h2>
                </div>
                <button onclick="window.location.reload()" class="bg-[#972828] text-white shadow-md px-4 py-2 font-bold rounded-md border active:scale-[0.95] transition-all durantion-300">โหลดหน้าเว็ปใหม่</button>
            </div>

        </div>`
    }

}

fetchContetnt()