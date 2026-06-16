**GETTING STARTED**
# **SETUP & REGISTRATION**

---

## **i. Before you begin**

---

This guide takes you from a blank slate to a fully running environment: an authenticated **IBM Bob** account and a local copy of the *Galaxium Travels* demo application that every module in this lab builds upon. Work through it once, end to end, and you will be ready to begin **Module 1 | Assist**.

!!! note "**A WORD ON WORKING WITH GENERATIVE AI**"

    IBM Bob is powered by generative AI and LLMs, and a defining trait of these systems is that they are *non-deterministic* — unlike the *deterministic* tools most developers are accustomed to. In practice, that means the same prompt can produce different code from one run to the next. This is both a strength and a quirk of the technology, and it is something to work *with* rather than against.

    **Precision is what tips the odds in your favor.** The more clearly you describe what you want, the more closely Bob's output will mirror your intent; conversely, the smallest change in wording can meaningfully change the generated code. Throughout this lab, your results may differ from the solutions shown — and that is expected, not a defect. Whenever an output diverges, you have three good options: refine the prompt and try again, edit the generated code by hand, or simply proceed if the variation still compiles and runs. Human review remains essential at every step, and never more so than while you are still learning the tool.

!!! note "**ASSOCIATED VIDEOS**"

    Throughout this course you will find short videos (hosted on Seismic) linked inline within each section. These are not optional viewing — they demonstrate, on screen and in real time, exactly how each feature behaves, a level of detail that text alone struggles to convey. We strongly encourage you to watch each one as you reach the corresponding section.

---

## **ii. Choosing how to access IBM Bob**

---

Before installing the demo application, you need an authenticated IBM Bob account. There are two registration paths to obtain one — plus a shortcut if you already have access — and the few minutes you spend choosing the right one can save you a great deal of time later.

| | TRIAL | INTERNAL |
|--|-------|----------|
| **Audience** | Anyone, including Business Partners (and IBMers using a personal email) | IBMers only |
| **Approval time** | Under 10 minutes | 24+ hours |
| **Access duration** | 1 month | Indefinite |
| **Bobcoin balance** | 40 Bobcoins | 100 Bobcoins (tied to your w3id) |
| **Registration email** | Must use a **non-IBM** email address | Your IBM w3id |

!!! note "WHICH PATH SHOULD I CHOOSE?"

    - **Trial** — the right choice if you are under time constraints, are a Business Partner, or have previously maxed out your Bobcoin balance. *(IBMers may use the Trial as well, though Internal is the official recommendation.)* Its 40 Bobcoins are more than enough to complete this lab, and access lasts a month — ample time, and easily renewed by creating another Trial account.
    - **Internal** — the right choice if you are an IBMer, aren't in a rush, and would like to keep exploring Bob beyond this lab. Note that the 100-Bobcoin balance is tied to your w3id, so if you have exhausted it elsewhere, that limit still applies here.
    - **Already have IBM Bob?** Skip both registration paths entirely and jump ahead to *Installing the Galaxium Travels demo app*. This assumes you have already installed and authenticated IBM Bob prior to this course.

!!! tip "IN A HURRY?"

    If your sole aim is to complete this Level 3 course as quickly as possible, take the **Trial** path and avoid waiting on manual approval altogether.

---

## **iii. Path A — Free Trial registration**

---

The Trial path provides fast access, a fresh balance of 40 Bobcoins, and is open to the widest audience (Business Partners included). Access lapses after one month — more than enough time to complete this lab, and trivially renewed by registering a fresh Trial account if you wish to experiment for longer.

---

1. Begin at the Free Trial sign-up page: [Free Trial | IBM Bob](https://bob.ibm.com/trial?utm_source=skills_network&utm_content=in_lab_content_link&utm_id=Lab-Demonstration+Guide+%5BBob+L3%5D-v1_1777325986)

    Fill out your details on the form and press **Next**.

    !!! warning "YOUR EMAIL BECOMES YOUR w3id"

        The email address you supply here will become your w3id. IBMers will not be able to complete this form with their IBM email, and Business Partners who completed a similar process previously may encounter the same difficulty.

        *The quick workaround is to register with a fresh personal email address (Outlook, Gmail, and the like). IBMers should open a private browsing window to do this. This authentication and install process is expected to be refined over time.*

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/9699a649-967f-4cee-bf00-fb8886593230/File_5fab9c0e6ec844468d55bc0fbb6068a0_text_export.jpeg" alt="" width="600" />
    </p>

---

2. Check the inbox of the email you registered with — the message should arrive nearly instantly.

    **Copy the 7-digit verification code** and return to the open IBM Bob Free Trial tab.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/da3da06a-332e-4cff-9210-132d57bb5105/File_c6e3f07a4b53461eb544c15fe97d481e_text_export.jpeg" alt="" width="600" />
    </p>

---

3. Enter the **7-digit verification code** and press **Submit**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/db9a2037-191d-460d-b878-0c85c4e47a48/File_97578b7fa56a4200a1e0a5b24d72a532_text_export.jpeg" alt="" width="600" />
    </p>

---

4. After submitting, you will be redirected to a confirmation page. Wait a few seconds until *"Your trial is ready!"* appears, then press **Access your trial now.**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/c68a3a22-c0bc-438a-8e34-d4104f28a63a/File_f1514396a0b34233a1373d266940ebad_text_export.jpeg" alt="" width="600" />
    </p>

---

5. You will land on the *"Download Bob"* page. Download IBM Bob for your respective operating system.

    *It follows the simple GUI-based install process you would expect of most desktop applications.*

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/a3344aac-2163-47ac-bba8-c461fe475d3c/File_64dccede130d413ab4870fb9697e9fb4_text_export.jpeg" alt="" width="600" />
    </p>

---

6. Once IBM Bob has finished installing, **open IBM Bob** (if it has not opened already).

    Then press **Log in to Bob**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/823f4c70-03dd-4452-b24b-50480c73112c/File_880f1ea2136e4d1b96c1f5c9f3f9b39d_text_export.jpeg" alt="" width="600" />
    </p>

---

7. Press **Allow** on the pop-up window.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/3d0178cf-b6e7-430d-83b0-c743985dac0e/File_6ed4e34559254ec1ba55dbbde5ff524b_text_export.jpeg" alt="" width="600" />
    </p>

---

8. Press **Open** on the subsequent pop-up window.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/84967b1a-441e-4566-a534-259aadd68ed3/File_a13363f84f5f4e62bc077b0703d5227e_text_export.jpeg" alt="" width="600" />
    </p>

---

9. On the IBM Verify sign-in page, expand the *"Choose an option"* drop-down and press **IBMid.**

    !!! warning "IBMers TAKING THE TRIAL PATH"

        If you are an IBMer attempting the Trial method while signed in to your actual IBM account (rather than the temporary one you created for Trial access), IBM Bob will try to sign in with that account — and if your primary IBMid has not been authenticated via Internal Registration, this will lead to problems.

        *To avoid this, sign out of any w3id accounts you do not intend to use, then open the sign-in link in a private browsing window. You may need to sign in again with your temporary IBM Trial email in that new window.*

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/78b54a7a-6edf-417f-b14a-e4f7407858aa/File_8ba4dc1789ee451f867f3ec45530e014_text_export.jpeg" alt="" width="600" />
    </p>

---

10. You should be redirected to an **"Authentication Successful!"** screen.

    Afterward, **return to the tab with IBM Bob open.**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/568d1073-3c7e-422a-92f8-1a0a015e3d3a/File_15d119df77ee4384a003ea73832c2588_text_export.jpeg" alt="" width="600" />
    </p>

---

11. Press **Open** on the new window that has appeared on the IBM Bob screen.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/08b3f0b4-6d25-4191-b130-7b16f68b5857/File_eb57339049244ac58cf539fcd8ec5b7e_text_export.jpeg" alt="" width="600" />
    </p>

---

12. Look to the Agentic Sidebar — the window for entering prompts has opened. You have now successfully accessed your authenticated IBM Bob account.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/bed46d69-8811-430c-88ee-4f4582357f13/File_d1a0c6a0088b4f448fbeb1f3cfd4c67e_text_export.jpeg" alt="" width="600" />
    </p>

    !!! tip "NEXT STEP"

        With Bob authenticated, skip ahead to **section v — *Installing the Galaxium Travels demo app*** and disregard the Internal and remote-desktop paths.

---

## **iv. Path B — Internal registration (IBMers)**

---

The Internal path is reserved for **IBMers who do not yet have IBM Bob**. It provides slower access but a larger, persistent balance of 100 Bobcoins across your w3id (resetting monthly), and it does not expire.

!!! warning "NEED FAST ACCESS, OR ARE YOU A BUSINESS PARTNER?"

    Take the **Trial** path in *section iii* instead, and skip this section entirely.

---

1. Begin at the [Bob Enterprise Sales Assets](https://techzone.ibm.com/collection/bob-enterprise-sales-assets?utm_source=skills_network&utm_content=in_lab_content_link&utm_id=Lab-Demonstration+Guide+%5BBob+L3%5D-v1_1777325986) page.

    Once there, click **Technical Resources** in the left sidebar.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/1d0512a3-74ec-4966-a60a-4cd915eefa0b/File_705a7ec7b47d4063bd3697b014acdeca_text_export.jpeg" alt="" width="600" />
    </p>

---

2. Click **See it** under the *"Internal Bob Sign Up"* tile.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/36c44874-1556-4f85-9b90-8ba5f6835e94/File_ba381dc286c8467bb8abed6b80058b12_text_export.jpeg" alt="" width="600" />
    </p>

---

3. You will be redirected to a sign-up form. Enter all of the requested information and press **Submit.**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/a5d2e76c-db00-4e5d-b75a-b65f86d3fbf9/File_143f2f1efb8c47cfb6d866b59049f330_text_export.jpeg" alt="" width="600" />
    </p>

---

4. Review your responses if you like, then confirm by clicking **Submit** once more in the pop-up window.

    *A "Thank you" pop-up appears afterward; you can simply dismiss it.*

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/4fc5d0de-8f9b-4eb1-ab6c-c17d0d10948c/File_ab69dfd08dca499ab13b35b9312a56ed_text_export.jpeg" alt="" width="600" />
    </p>

---

5. After submission, you will receive a confirmation email.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/49a4367e-c2f0-4585-84b6-af492cdb22fc/File_ed5104c3e87f43d6bd79e38e049c32ac_text_export.jpeg" alt="" width="600" />
    </p>

---

6. At this point you will need to wait — as noted, approval typically takes at least 24 hours.

    !!! note "INTERNAL IS THE OFFICIAL RECOMMENDATION FOR IBMers"

        If you are in a time crunch, however, Trial approval is far faster — refer back to *section iii* if you cannot wait for access.

    Once approved, you will receive an email (or something similar). Follow the **Download Bob** hyperlink within it.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/8e26be94-86ba-44ab-a83d-69a898034360/File_45274e091e044c659a06287f4f3e78c8_text_export.jpeg" alt="" width="600" />
    </p>

---

7. The *Download Bob* link opens a Box folder containing download links for various operating systems. Locate the version appropriate for your OS and click it.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/8ee0de1a-b454-4165-88ee-356ec779dad2/File_8a50d5cc42f8497b9d498c4592146cfb_text_export.jpeg" alt="" width="600" />
    </p>

---

8. Click the appropriate file within the folder.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/c81a2bd3-595a-479b-b13e-75cec4834134/File_a27e4ee65cd943c69e13bb16639f88a6_text_export.jpeg" alt="" width="600" />
    </p>

---

9. Click **Download**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/327193c8-2743-4f10-823d-c6e3dae79462/File_77fa6591724e409a9638a6740255af79_text_export.jpeg" alt="" width="600" />
    </p>

---

10. Review the License Agreement, accept it, and press **Next.**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/fd7401d9-7536-4a27-89ce-f7db88419302/File_1794fb5a883e4b82b49e05bf57265902_text_export.jpeg" alt="" width="600" />
    </p>

---

11. Continue through the GUI-based install process common to most desktop software — review the instructions on each Setup page to configure Bob to your liking, and press **Next** to proceed.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/f9bd3856-b8d2-47c8-8720-fab795288223/File_c124b68a8eaa4a6e93c2666806448470_text_export.jpeg" alt="" width="600" />
    </p>

---

12. Installation should take roughly 5–10 minutes.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/833b9873-b0e1-4b25-88c8-429782aa18f8/File_a83e04e2329548f1904ad5b49db17b0d_text_export.jpeg" alt="" width="600" />
    </p>

---

13. A completion pop-up appears. Tick **Launch IBM Bob** (if it is not already checked) and press **Finish**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/8d756d03-291f-4285-903d-c535f79a0ba3/File_a4cfd88bff4549429e103dec4813cf8a_text_export.jpeg" alt="" width="600" />
    </p>

---

14. IBM Bob opens. Click **Log in to Bob**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/fd276b7f-8468-4b6f-a0b1-03d64b813f2e/File_001a881981d14a70b38b2223dffea141_text_export.jpeg" alt="" width="600" />
    </p>

---

15. Click **Allow.**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/8a52554d-ef2b-4d99-901b-4dac4f33c1d5/File_8137ffa47ce14472ab686b4aaee6fe4d_text_export.jpeg" alt="" width="600" />
    </p>

---

16. Tick the *"Always allow \[...\]"* box and press **Open**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/b1fbbdef-7b01-4aa3-be35-92400b32e00d/File_6fab1c18f7e74aa1bed098110381b9e5_text_export.jpeg" alt="" width="600" />
    </p>

---

17. Switch back to IBM Bob. A pop-up reading *"Allow 'IBM Bob' extension to open this URL"* appears — click **Open**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/2f051d98-b692-454f-91b4-d7e0a193308f/File_a0044af67ea74f1a8caef21821ea6658_text_export.jpeg" alt="" width="600" />
    </p>

---

18. The prompt window has opened in your IBM Bob Agentic Sidebar — you are authenticated and ready.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/3733e39b-285c-44ae-a13a-3e4e74c28b97/File_cf25c4f8c6aa4b00a92a8f90ec5fd563_text_export.jpeg" alt="" width="600" />
    </p>

    !!! tip "NEXT STEP"

        Continue to **section v — *Installing the Galaxium Travels demo app*** below, and disregard the remote-desktop path.

---

## **v. Installing the Galaxium Travels demo app**

---

With IBM Bob authenticated, the final piece of setup is a local copy of the *Galaxium Travels* codebase — the single, production-style application that every module in this lab builds upon.

!!! note "PREREQUISITES"

    If you do not already have them installed, you will need the following. **npm** is bundled with Node.js.

    - **Python 3.8+** — <a href="https://www.python.org/downloads/" target="_blank">Download</a>
    - **Node.js 18+** — <a href="https://nodejs.org/" target="_blank">Download</a>

---

1. Open a Terminal window, then copy and paste the following command and execute it to clone the project (along with the `bob-learning-path-branch` that contains the tutorial code):

    ``` bash
    git clone -b bob-learning-path-branch https://github.com/IBM/galaxium-travels
    ```

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/befab27e-07c8-402a-953d-4d34982cd57b/File_889fd34093454cd19d281579d5a89981_text_export.jpeg" alt="" width="600" />
    </p>

---

2. Next, move into the `galaxium-travels` directory. Run the command that matches your operating system, then press ++enter++:

    ??? quote "MAC OR LINUX"
        ``` bash
        cd \~/galaxium-travels
        ```
    ??? quote "WINDOWS OS"
        ``` bash
        cd $HOME\galaxium-travels
        ```

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/5e131b35-8c00-4d46-8496-fd56cde3e001/File_c6124a39396d48b78966d1d2d18745e9_text_export.jpeg" alt="" width="600" />
    </p>

---

## **vi. Running the app on macOS or Linux**

---

Starting the application on macOS and Linux is straightforward — a single script brings up both the backend and the frontend.

---

1. From within the `galaxium-travels` directory, run the start-up script and press ++enter++:

    ``` bash
    ./start.sh
    ```

    ??? note "ONE-LINE STARTUP NOT WORKING? (MANUAL PROCESS)"

        Execute each command separately, opening a new Terminal window where directed (for the frontend start-up).

        **Start the backend:**
        ```
        cd booking_system_backend
        python -m venv .venv
        source .venv/bin/activate  # On Windows: .venv\Scripts\activate
        pip install -r requirements.txt
        python server.py

        ```

        **Start the frontend (in a new Terminal window):**
        ```
        cd booking_system_frontend
        npm install
        npm run dev

        ```

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/1170cd60-aed5-44d4-ab3f-490bffc3e99d/File_5d37b5900a0b4ebd86f4c995cf83c40d_text_export.jpeg" alt="" width="600" />
    </p>

---

2. The app has started successfully. To reach the frontend, copy the local URL it reports — it should resemble the following:

    !!! warning "WEB BROWSER"
        http://localhost:5173/

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/793d7562-1515-4044-b064-3bfdff2720ca/File_67f1e49b46dc48c99f86a90e51e2adae_text_export.jpeg" alt="" width="600" />
    </p>

---

3. Switch back to your web browser.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/571e9b65-db2e-414d-ade5-eb7179b4fe98/File_ef9f4d8f12d040ec877b25fea04c1aa4_text_export.jpeg" alt="" width="600" />
    </p>

---

4. Paste the address you just copied into the search bar and press ++enter++:

    !!! warning "WEB BROWSER"
        http://localhost:5173/

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/5fa648e3-7945-45ba-ba8b-38072be0980c/File_3834d144499e45fc98bd28445eff1b94_text_export.jpeg" alt="" width="600" />
    </p>

---

5. You have now successfully reached the frontend of the *Galaxium Travels* demo application.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/e166dd8b-4ca1-4d63-9df1-86652d6739bd/File_2adcd32f1351430dba2682e9677b54f7_text_export.jpeg" alt="" width="600" />
    </p>

---

6. Return to IBM Bob and click **Explorer** (*or press* ++ctrl+shift+e++).

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-05-08/de154c20-20a2-49e5-93cb-eefa77a7af31/user_cropped_screenshot_0936fd4f0be24f48a2ec583fbe59ec78_text_export.jpeg" alt="" width="600" />
    </p>

---

7. Click **Open Folder.**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-05-08/8a6cff90-c8bf-4ca8-96ca-8119371c3135/user_cropped_screenshot_805399a9e17647b1b1381037dff84bbe_text_export.jpeg" alt="" width="600" />
    </p>

---

8. Navigate to the location of the `galaxium-travels` folder, then **select galaxium-travels**.

    *This is whatever directory you were in when you ran the `git clone` command — most likely your home / user-profile directory.*

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-05-08/559f074a-b846-4f29-91cd-f16fd5afcf06/user_cropped_screenshot_aaf0f2a9525c4a4bb3ecc1e05a733145_text_export.jpeg" alt="" width="600" />
    </p>

---

9. With the `galaxium-travels` folder open, expand the drop-down arrow.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-05-08/b7c1825b-047f-4114-a619-377049dc4c0c/user_cropped_screenshot_e9baad11800a426e8627d70fb7bd8bab_text_export.jpeg" alt="" width="600" />
    </p>

---

10. You can now see the sub-folders that make up the web app — this is where you will modify the code to demonstrate IBM Bob's capabilities throughout the lab.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-05-08/47cedba3-a755-4fe8-a59b-67ee37ac344d/user_cropped_screenshot_ea052cc85461418eb96a1e4dec58e69c_text_export.jpeg" alt="" width="600" />
    </p>

    !!! tip "SETUP COMPLETE"

        With the app running and the project open in Bob, your local environment is ready — skip past the optional remote-desktop path and continue to *section ix*.

---

## **vii. Running the app on Windows**

---

On Windows, bringing the app up takes a little more manual effort.

!!! note "TRY THE SCRIPT FIRST"

    This area is undergoing improvements, and the automated path may already be fixed by the time you take this course. Try running `start.bat` first — if it errors, fall back to the manual process below.

---

1. In a Terminal window, paste and execute each of the following commands **one at a time**, pressing ++enter++ after each:

    **Step 1:**
    ```
    cd $HOME\galaxium-travels
    ```
    **Step 2:**
    ```
    cd booking_system_backend

    ```
    **Step 3:**
    ```
    python -m venv .venv

    ```
    **Step 4:**
    ```
    .venv\Scripts\activate

    ```
    **Step 5:**
    ```
    pip install -r requirements.txt

    ```

    After the `pip install` command, the requirements will begin installing — this takes roughly 5–10 minutes to complete.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/809e914e-21ab-4a71-a6b7-b93b8fc55490/user_cropped_screenshot_7d23eabf5ac14724a375dda1b9c0e5f0_text_export.jpeg" alt="" width="600" />
    </p>

---

2. In the **same** Terminal window, paste and execute:

    ```
    python server.py
    ```

    Afterward, **open a new Terminal window by pressing the Plus (+) button.**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/0887d894-f833-424c-b5dc-98e07508640d/user_cropped_screenshot_9e209def5d2e42cc8940ed86d4280db6_text_export.jpeg" alt="" width="600" />
    </p>

---

3. In the new Terminal window, run the following commands in sequence:

    **Step 1:**
    ```
    cd $HOME\galaxium-travels

    ```
    **Step 2:**
    ```
    cd booking_system_frontend

    ```
    **Step 3:**
    ```
    npm install

    ```
    **Step 4:**
    ```
    npm run dev

    ```

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/c9e3344f-aedf-424f-91b5-cf87e5a9af7f/user_cropped_screenshot_6d24558a7eb84ab89c9bcf2b0826fdcc_text_export.jpeg" alt="" width="600" />
    </p>

---

4. After running the commands (whether `./start.sh` on macOS/Linux or the manual Windows steps above), you will see *Vite — ready in \_\_\_ ms*.

    You will also see a localhost URL — most likely `http://localhost:5173/`. **Copy this link.**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/ad2c22a2-9d6a-4a7a-9930-0ca264fb7e56/user_cropped_screenshot_aadbbb8e361140f48d26fca41a10e2d5_text_export.jpeg" alt="" width="600" />
    </p>

---

5. Open your web browser and paste the URL you saw — as noted, this is most likely `http://localhost:5173/` (unless another instance of Vite is already running).

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/f2497a00-6a44-4b46-8441-89e45066dc13/user_cropped_screenshot_0d54a0a48ff6425abc4cdbeb6811f18c_text_export.jpeg" alt="" width="600" />
    </p>

---

6. You are now successfully connected to the *Galaxium Travels* demo app.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/4792bc88-f701-4fed-9e81-7aa6fbed878c/screenshot_bfb9b7c0ab0d42dd816f97bcb064991d_text_export.jpeg" alt="" width="600" />
    </p>

---

7. Return to IBM Bob and click **Explorer** (*or press* ++ctrl+shift+e++).

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-05-08/de154c20-20a2-49e5-93cb-eefa77a7af31/user_cropped_screenshot_0936fd4f0be24f48a2ec583fbe59ec78_text_export.jpeg" alt="" width="600" />
    </p>

---

8. Click **Open Folder.**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-05-08/8a6cff90-c8bf-4ca8-96ca-8119371c3135/user_cropped_screenshot_805399a9e17647b1b1381037dff84bbe_text_export.jpeg" alt="" width="600" />
    </p>

---

9. Navigate to the location of the `galaxium-travels` folder, then **select galaxium-travels**.

    *This is whatever directory you were in when you ran the `git clone` command — most likely your home / user-profile directory.*

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-05-08/559f074a-b846-4f29-91cd-f16fd5afcf06/user_cropped_screenshot_aaf0f2a9525c4a4bb3ecc1e05a733145_text_export.jpeg" alt="" width="600" />
    </p>

---

10. With the `galaxium-travels` folder open, expand the drop-down arrow.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-05-08/b7c1825b-047f-4114-a619-377049dc4c0c/user_cropped_screenshot_e9baad11800a426e8627d70fb7bd8bab_text_export.jpeg" alt="" width="600" />
    </p>

---

11. You can now see the sub-folders that make up the web app — this is where you will modify the code to demonstrate IBM Bob's capabilities throughout the lab.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-05-08/47cedba3-a755-4fe8-a59b-67ee37ac344d/user_cropped_screenshot_ea052cc85461418eb96a1e4dec58e69c_text_export.jpeg" alt="" width="600" />
    </p>

    !!! tip "SETUP COMPLETE"

        With the app running and the project open in Bob, your local environment is ready — skip past the optional remote-desktop path and continue to *section ix*.

---

## **viii. (Optional) TechZone remote desktop**

---

!!! warning "OPTIONAL — RUNNING LOCALLY IS STRONGLY PREFERRED"

    This path provisions a TechZone remote desktop with IBM Bob preinstalled. It involves considerably more setup to get the demo app working, and **it is not required** if you were able to install Bob and run the app locally via the earlier sections. **If local install worked for you, skip this section entirely** and continue to *section ix* — you will save yourself a great deal of effort.

    You must also have completed either the **Trial** or **Internal** sign-up first; this path connects an existing IBM Bob account to a remote machine.

---

1. Begin at the [Bob Enterprise Sales Assets](https://techzone.ibm.com/collection/bob-enterprise-sales-assets?utm_source=skills_network&utm_content=in_lab_content_link&utm_id=Lab-Demonstration+Guide+%5BBob+L3%5D-v1_1777325986) page, then click **Technical Resources** in the left sidebar.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/22bf98c8-00e5-4b1b-b906-ce4b15ec56a4/File_4440a8403ac94863987ac23e108559c6_text_export.jpeg" alt="" width="600" />
    </p>

---

2. Click **Reserve it** under the *"IBM Cloud VPC VSI - Bob IDE (IBM-Bob-linux-x64-1.109.5+bob1.0.1) - IBMID"* tile.

    !!! note "MIND THE ENVIRONMENT YOU RESERVE"
        Pay attention to the tile's title and description. For this lab, you do **not** need the version that supports API-key access.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/b72f9e84-f845-4f82-87f7-359bfc6340f6/File_3f73fd8298b2401b993cb13602a3fbef_text_export.jpeg" alt="" width="600" />
    </p>

---

3. Click the **Name** field and enter a name for this Level 3 lab. *(The name does not matter — for example, "IBM Bob Level 3".)*

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/824c19a2-0725-4264-af4b-7b20e458c62d/File_6d5478bd73eb459b94ead959ea627e0a_text_export.jpeg" alt="" width="600" />
    </p>

---

4. Click the **Description** field and enter a description. *(Likewise, the description does not matter — for example, "IBM Bob Level 3 course".)*

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/5565ee23-1d3a-422f-9c6d-9b5c1f4e0950/File_b1c092e9d66e4aebafd0f1612b929f17_text_export.jpeg" alt="" width="600" />
    </p>

---

5. With the name and description filled in, click **Next**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/7bba1e24-c208-42d9-b9da-080fdc55769c/File_16f1ddbd7c0c4a4b8496c8f7942ccac6_text_export.jpeg" alt="" width="600" />
    </p>

---

6. Under *Purpose*, select **Education**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/afe6e474-827c-41b1-bfa9-f60667bdb635/File_493d6fddca5a411082fedfbe3e7400be_text_export.jpeg" alt="" width="600" />
    </p>

---

7. Click **Next**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/6cf28f4c-49f3-4226-b64b-1269fd183972/File_0a7b1f9770b6483dbb9b6787e3bb0e6a_text_export.jpeg" alt="" width="600" />
    </p>

---

8. **Select your preferred geography** — whichever location is nearest to you.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/74eb8711-64ae-4329-a575-f5bf611ce461/File_174dd422c36c4bf88f74c8fc62917bfd_text_export.jpeg" alt="" width="600" />
    </p>

---

9. Click **Next**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/f488b428-a98a-4c77-84d0-4f9d78a8a4da/File_ffc70eacf3ba4c56ac88e7bb59a317bb_text_export.jpeg" alt="" width="600" />
    </p>

---

10. On the *Scheduling* page, note that your initial reservation lasts 48 hours (you can extend it afterward). **Choose your preferred start date** for when you would like to access IBM Bob.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/c89b3f4a-1aee-4fa2-b60e-05d6f7ac1e31/File_8a9879e63ae4428d9407151faa314681_text_export.jpeg" alt="" width="600" />
    </p>

---

11. Click **Next**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/db77c2f7-ad4f-4567-8038-4d6e350fbbc7/File_866cb499a99f453ba93ef8e1bb5b75dc_text_export.jpeg" alt="" width="600" />
    </p>

---

12. Click **Review**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/5697d2c7-1672-4037-bd04-03b455dd70dc/File_9ad413a1ae4f4cdf890c228180ec215c_text_export.jpeg" alt="" width="600" />
    </p>

---

13. Review the details. Once you have confirmed they are correct, click **"I agree to IBM Technology Zone's terms & conditions and user security policies."**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/527531ce-9692-4415-9be5-a9ea74ebbd47/File_0beefb7dd9c24953a6d4ad3c93d7edce_text_export.jpeg" alt="" width="600" />
    </p>

---

14. Click **Submit**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/759667ea-b31c-4f45-b7ca-76b8f77263fa/File_8a6d03ea094649029aa530611eee1d35_text_export.jpeg" alt="" width="600" />
    </p>

---

15. Click **Track my request**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/5188dfc0-305c-4f02-b4c0-5f2f2f118109/File_1647ac62895b4894b67251023bbd49d2_text_export.jpeg" alt="" width="600" />
    </p>

---

16. Wait for the reservation status to move through **Scheduled → Provisioning → Ready** — this usually takes roughly 30 minutes.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/cd208846-e9b7-46d1-81a7-91bca307a3d4/File_f93a685ddb1d45bc8eddc11b35f92ca9_text_export.jpeg" alt="" width="600" />
    </p>

---

17. The reservation is complete once the status reads **Ready**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/5464b0be-f58a-42d2-a583-7f06532b4c98/File_a0054da2b8044bf38c55bc3c9ebf094e_text_export.jpeg" alt="" width="600" />
    </p>

---

18. Check your email for an IBM Cloud account invitation. When it arrives, click the **Join now** hyperlink.

    !!! warning "COMPLETE THIS STEP EVEN IF YOU'VE DONE IT BEFORE"
        Even if you have created an IBM Cloud account previously (for other labs, or earlier iterations of this course), **you must complete this step** — you will not be able to connect to the remote desktop otherwise.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/1ac6c410-4bc8-45a7-a90e-0f477994a361/File_c8cdd0dc1ffe434284dd9f60564605b1_text_export.jpeg" alt="" width="600" />
    </p>

---

19. Review your account and personal information, then the Terms and Conditions. If everything looks acceptable, click **"I accept the product Terms and Conditions of this registration form."**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/d5d67694-6ef3-4f43-9f13-e0407f7ee55e/File_ebe7f01de72d4663a42b96a672377a1f_text_export.jpeg" alt="" width="600" />
    </p>

---

20. Click **Join account**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/7228726a-8ba4-4541-9e5f-cece0c4dd454/File_6b0d2cfa9b0e4e2783f57a0bcff0083b_text_export.jpeg" alt="" width="600" />
    </p>

---

21. You may be prompted to switch to a new account — if so, click **Proceed**. Otherwise, move on to the next step.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/4648c3a6-062e-462b-8d18-d553c3fa784c/File_fc6e810fe5a24675b8ad9eb3474bcbd1_text_export.jpeg" alt="" width="600" />
    </p>

---

22. You have now successfully connected to IBM Cloud.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/b79dd404-a3e6-400f-bb7c-230590d9669f/File_c80e6754faaa49de9a0bde53dad8b0f6_text_export.jpeg" alt="" width="600" />
    </p>

---

23. Return to the [Bob Enterprise Sales Assets](https://techzone.ibm.com/collection/bob-enterprise-sales-assets?utm_source=skills_network&utm_content=in_lab_content_link&utm_id=Lab-Demonstration+Guide+%5BBob+L3%5D-v1_1777325986) page. Expand the **My TechZone** drop-down in the header and click **My requests.**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/d66f3678-dec6-4269-9e6a-355e7156a937/File_8fd8b132348d4a4ca0399ebd8764a8cc_text_export.jpeg" alt="" width="600" />
    </p>

---

24. Click **Open it**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/8a2ba966-f400-4337-8e6f-332176a1058c/File_29a874efc53f45019562fdd0d935cb83_text_export.jpeg" alt="" width="600" />
    </p>

---

25. **Expand the drop-down** for your IBM Bob environment.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/95f46fe9-955a-4162-bfe2-0c1901ea9114/File_937a320291ea43c39c655b954e5a8799_text_export.jpeg" alt="" width="600" />
    </p>

---

26. Click the [https://vdi.cloud.techzone.ibm.com/guacamole](https://vdi.cloud.techzone.ibm.com/guacamole?utm_source=skills_network&utm_content=in_lab_content_link&utm_id=Lab-Demonstration+Guide+%5BBob+L3%5D-v1_1777325986) link to connect to the Red Hat Enterprise Linux 9 remote desktop, with IBM Bob preinstalled.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/04b8c972-8a67-46c5-b1cb-83fe4a4158b2/File_a2622bc8f4da40da961d42d32a7e84a7_text_export.jpeg" alt="" width="600" />
    </p>

---

27. **Expand the IBM Cloud drop-down** by pressing the *"plus"* button.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/19bd5b75-34e6-4411-bc63-b85466ca5128/File_a2c6b50cc14d41dba992868d107b38b4_text_export.jpeg" alt="" width="600" />
    </p>

---

28. Next, **expand the Environment drop-down** by pressing the *"plus"* button.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/5ab3801c-d593-4a28-9720-4a4fa3bf3bde/File_397c60afda66488b93b7ee01955d1214_text_export.jpeg" alt="" width="600" />
    </p>

---

29. Click **VNC Desktop**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/b7634111-2e3d-4f98-bac0-9709dfa64a2f/File_9ec9924a639147acb5a7d97e931ef554_text_export.jpeg" alt="" width="600" />
    </p>

---

30. You are now on the remote desktop, with IBM Bob preinstalled. Click the **Activities** button in the top left (*next to the Red Hat logo*).

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/1b2df963-0d19-443c-a4fa-378efe040604/File_44354256e64641b5b6136f60d0e16dfc_text_export.jpeg" alt="" width="600" />
    </p>

---

31. Click the **Show Applications** icon.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/40278dc1-84a2-4e6a-a11a-eafa04199a36/File_13e2d49b1a6c4add98438f47abd1cc8f_text_export.jpeg" alt="" width="600" />
    </p>

---

32. Click **IBM Bob**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/3b0818ca-c2f2-486b-a510-44f171e263d0/File_d3f4317adb7c4d64889b9e73759b2450_text_export.jpeg" alt="" width="600" />
    </p>

---

33. On opening IBM Bob, a *"Choose password for new keyring"* prompt may appear. It isn't needed for this lab — simply press **Cancel**.

    *This prompt may appear several times; keep pressing **Cancel** until it lets you proceed.*

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/a6a028aa-0d44-4a31-b967-33fac7ca9578/File_5a35547ba5d5486b80ea8455e98c448b_text_export.jpeg" alt="" width="600" />
    </p>

---

34. Settings can be imported from other editors, but for now let's proceed with the defaults. Press **Skip for now.**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/147f675e-6533-441a-9c07-6b93a2a7cb7f/File_9010239d130b4c909d93a6e713a3916b_text_export.jpeg" alt="" width="600" />
    </p>

---

35. You are greeted with the IBM Bob welcome page (feel free to change your theme or explore the tutorials). For now, click the blue **Log in to Bob** button on the right sidebar.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/d42259c0-ecec-4939-99a2-7fd3e0f2f9c5/File_54f7e49f051b4aeca944cb16752afa71_text_export.jpeg" alt="" width="600" />
    </p>

---

36. This opens the IBMid sign-in page in a new tab. Complete the usual authentication steps to sign in to your IBMid account.

    *If you are not redirected automatically, navigate to **Activities > Firefox**.*

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/1919a73d-7409-4e76-9e62-41bb142b5908/File_e3cd5ab4db5740cc83b172b133871b6e_text_export.jpeg" alt="" width="600" />
    </p>

---

37. After signing in with your IBMid and password (or Passkey), you will be redirected to an **"Authentication Successful!"** page. Click the **Activities** button once again.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/be24d35f-580e-44ea-af1b-a6f8be2a133c/File_d5132665330c4de2a50ec5848bf10f1f_text_export.jpeg" alt="" width="600" />
    </p>

---

38. Click the (already open) IBM Bob editor window.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/16daba8a-b438-408c-b4a2-da91facedd81/File_fcbb353870ef4d9e9693593a68ec8aef_text_export.jpeg" alt="" width="600" />
    </p>

---

39. A window reading *"Allow 'IBM Bob' extension to open this URL?"* appears. Press **Open**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/5e9b508f-8374-4c8e-945a-0283523ad3d7/File_9bd6c7b6a1914db488d17b9aa1da627b_text_export.jpeg" alt="" width="600" />
    </p>

---

40. You are now connected to IBM Bob. The prompt window has opened; note your plan name in the bottom-right corner (*currently the IBM internal plan*) and your Bobcoin balance in the top-right (*shown as a percentage*).

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/47e9370f-ff17-4094-abb9-0affc3434660/File_ea294f16d93e4313a36ca26c07f96059_text_export.jpeg" alt="" width="600" />
    </p>

---

41. With the remote desktop connected and IBM Bob authenticated, you next need to install newer versions of a few prerequisites on the Red Hat Enterprise Linux 9 machine so it can run the demo application:

    - Python
    - Node.js
    - npm

    Doing this on RHEL 9 is a little more involved than on macOS or Windows. Let's get started.

---

42. Click the **Activities** button.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/1b2536b5-0083-4c17-a976-f9b6c31ac301/File_9ba40d7d808241c2aed1964e3ce48a0a_text_export.jpeg" alt="" width="600" />
    </p>

---

43. Open the **Terminal**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/9cccc375-d8c9-4bdc-9624-8dfbd0590430/File_aaa2373f154d4972889a8718d37d4f27_text_export.jpeg" alt="" width="600" />
    </p>

---

44. The Terminal window opens.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/4d6319cf-1c3e-4d19-823d-e7813b04913f/File_29a0268cd5f7458fa2ccfdfe00cc3eb2_text_export.jpeg" alt="" width="600" />
    </p>

---

45. First, clone the *Galaxium Travels* demo code used throughout this lab. The command also checks out the `bob-learning-path-branch` containing the tutorial code. Paste the following and press ++enter++:

    ``` bash
    git clone -b bob-learning-path-branch https://github.com/IBM/galaxium-travels
    ```

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/1c25e55d-b881-4e15-9013-dc7d77fbd23e/File_4c26b2f918ff45c89c89ca633f6a52d9_text_export.jpeg" alt="" width="600" />
    </p>

---

46. Click the **Activities** button.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/5c714d5c-f9d1-42f0-b066-b244b77c52ac/File_b1a89270c9474fffaa640a00dee0cc01_text_export.jpeg" alt="" width="600" />
    </p>

---

47. Open **Firefox.**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/e7f4b2db-322d-4ca7-acba-2bf5759013c6/File_ad93bcd0613143539ee6c5b775678ec3_text_export.jpeg" alt="" width="600" />
    </p>

---

48. Navigate to the following GitHub page, where you'll find two scripts that simplify the install process:

    !!! warning "BOOTSTRAP SCRIPTS"
        https://github.com/Phillips-Quintin/IBM-Bob-L3-Bootstrap

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/b1d7640e-e1d4-4698-b69c-6efecf68703d/File_a1204fca599e4ad4825d98d0bdf830e7_text_export.jpeg" alt="" width="600" />
    </p>

---

49. Click one of the files (in this example, `bootstrap_backend.sh`).

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/43cb93b0-5d87-4a36-af9d-fcecea87eb39/File_5ad4b63264cb48ebb3e2fd5c905ff879_text_export.jpeg" alt="" width="600" />
    </p>

---

50. Click **Download raw file**. Repeat this download for the other file, `bootstrap_frontend.sh` — **you need both**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/258b8c41-c053-4e86-b5b3-0dd796f3ae10/File_4ddf06c054074a59be4c6ab84cf8a67f_text_export.jpeg" alt="" width="600" />
    </p>

---

51. After downloading both the frontend and backend bootstrap files, click the **Activities** button again.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/39905a10-38c3-4d94-9079-5c6c0e3d3773/File_c7c75aa6f64645d1bd9e9ebbe43ca4ef_text_export.jpeg" alt="" width="600" />
    </p>

---

52. Click the **Files** button.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/06124638-656a-4683-8fed-ad0122e3e38c/File_0056c77304ac4f189be2fa673f1361be_text_export.jpeg" alt="" width="600" />
    </p>

---

53. You now need to move the two shell files from the *Downloads* folder into the `galaxium-travels` folder. Start by **navigating to the Downloads folder.**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/00a843e5-41be-4287-8b87-79d302a58590/File_fa855075623944d5bf9282e9f446fbef_text_export.jpeg" alt="" width="600" />
    </p>

---

54. Highlight both files and right-click — you should see a **"Move to"** option. Click **"Move to"**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/b432fbde-b245-4ca1-a496-a9590d538a0e/File_a9bc207b9bb3447a8ba39865237bc7c9_text_export.jpeg" alt="" width="600" />
    </p>

---

55. Navigate to the **Home** folder (where your *Galaxium Travels* app currently resides).

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/7a68bf3b-e7df-472a-8eb4-0bdfe6d29b79/File_c094d671fdad4e3a9cb69ad2e740a69b_text_export.jpeg" alt="" width="600" />
    </p>

---

56. Click the `galaxium-travels` folder so it is highlighted, then press **Select** to finish moving the files.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/c7c6fe74-4aaa-4a6e-96f3-ae10b58ac89f/File_b86cbc096a0a48028cd2441122531050_text_export.jpeg" alt="" width="600" />
    </p>

---

57. Click the **Activities** button.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/961bc68c-8acf-4f05-baa0-664cdb039b81/File_ca0c15bc2c6442d8999d3d2945c03d31_text_export.jpeg" alt="" width="600" />
    </p>

---

58. Open the **Terminal** window.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/97aca272-d5c6-4f4f-a09b-e1742a00705a/File_69594cbcdab2480f914afe0e865f6353_text_export.jpeg" alt="" width="600" />
    </p>

---

59. Make the backend bootstrap file executable. Paste the following and press ++enter++:

    ``` bash
    chmod +x \~/galaxium-travels/bootstrap_backend.sh
    ```

    !!! warning "MIND THE TILDE"
        When copying these commands, an unnecessary backslash (`\`) is occasionally inserted before the tilde (`~`) — which produces a *"No such file or directory"* error. If you hit this, remove the stray backslash so the command matches exactly as written, and try again. This caution applies to all of the `bootstrap` commands that follow.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/48b1742c-5d76-4187-84ff-074e544dcdcf/File_1c296e925ea34ca2b6b4ae81e5c9f773_text_export.jpeg" alt="" width="600" />
    </p>

---

60. Run the backend bootstrap script. Paste the following and press ++enter++:

    ``` bash
    \~/galaxium-travels/bootstrap_backend.sh
    ```

    *If you see no output after running the script, paste and execute the command again.*

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/07f8679c-b92e-4bd6-a25a-b88114800d6c/File_c2786a5deebd4bbd952deb9ce5ccfc7d_text_export.jpeg" alt="" width="600" />
    </p>

---

61. This takes roughly 5–10 minutes to install the backend prerequisites; you will see each program's progress in the Terminal. On completion, you will see **"==> Backend setup complete."**

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/b96d53b4-19e0-4dc4-a987-6374bfed29c4/File_a06ea96c494641c89725098b4e49af58_text_export.jpeg" alt="" width="600" />
    </p>

---

62. Likewise, make the frontend bootstrap file executable. Paste the following and press ++enter++:

    ``` bash
    chmod +x \~/galaxium-travels/bootstrap_frontend.sh
    ```

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/eec77e06-2987-4ede-b803-f4d285ed1fac/File_1b04adfc0f1b48cfaadfdc39a1055b11_text_export.jpeg" alt="" width="600" />
    </p>

---

63. Run the frontend bootstrap script. Paste the following and press ++enter++:

    ``` bash
    \~/galaxium-travels/bootstrap_frontend.sh
    ```

    *If you see no output after running the script, paste and execute the command again.*

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/d8a47a44-90d1-44c2-b7ef-42ce6b95008f/File_3c2cc8b625134263b3b65bcd30d07f7c_text_export.jpeg" alt="" width="600" />
    </p>

---

64. On completion, you will see a **"==> Frontend setup complete."** message. At this point, you have downloaded the project directory and all necessary prerequisites.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/90eae087-c447-4eed-8986-a10001ce30a1/File_5d7e8b3077164dabb5e411aea3ecdb32_text_export.jpeg" alt="" width="600" />
    </p>

---

65. With the prerequisites in place, you can now launch the demo application. First, **open a new Terminal window** by pressing the plus button at the top-left of the already-open Terminal.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/cb84a568-0173-4f05-91b6-c06b324bc0b0/File_41cdf8125d04453388c69399f9a2ed5d_text_export.jpeg" alt="" width="600" />
    </p>

---

66. If you aren't already there, move into the `galaxium-travels` directory. Paste the following and press ++enter++:

    ``` bash
    cd galaxium-travels
    ```

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/5168d9b0-7a23-407f-8dc3-959787576e96/File_68492a16967342f38a8235d9fc454fc6_text_export.jpeg" alt="" width="600" />
    </p>

---

67. Finally, start up the *Galaxium Travels* demo app. Paste the following and press ++enter++:

    ``` bash
    ./start.sh
    ```

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/1170cd60-aed5-44d4-ab3f-490bffc3e99d/File_5d37b5900a0b4ebd86f4c995cf83c40d_text_export.jpeg" alt="" width="600" />
    </p>

---

68. The app has started successfully. To reach the frontend, copy the local URL it reports — it should resemble the following:

    !!! warning "WEB BROWSER"
        http://localhost:5173/

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/793d7562-1515-4044-b064-3bfdff2720ca/File_67f1e49b46dc48c99f86a90e51e2adae_text_export.jpeg" alt="" width="600" />
    </p>

---

69. Click the **Activities** button.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/1abbafe6-3973-4268-8a0f-241a4e938ff1/File_72b6965652d046debfc153f02fbf8d7c_text_export.jpeg" alt="" width="600" />
    </p>

---

70. Return to the Firefox web browser.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/571e9b65-db2e-414d-ade5-eb7179b4fe98/File_ef9f4d8f12d040ec877b25fea04c1aa4_text_export.jpeg" alt="" width="600" />
    </p>

---

71. Paste the address you copied into the search bar and press ++enter++:

    !!! warning "WEB BROWSER"
        http://localhost:5173/

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/5fa648e3-7945-45ba-ba8b-38072be0980c/File_3834d144499e45fc98bd28445eff1b94_text_export.jpeg" alt="" width="600" />
    </p>

---

72. You have now successfully accessed the *Galaxium Travels* demo application. Now, let's see what IBM Bob can do.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-04-27/e166dd8b-4ca1-4d63-9df1-86652d6739bd/File_2adcd32f1351430dba2682e9677b54f7_text_export.jpeg" alt="" width="600" />
    </p>

---

## **ix. You're ready — proceed to the lab**

---

Setup is complete: IBM Bob is authenticated, the *Galaxium Travels* application is running locally, and the project is open in your editor. You are ready to begin the hands-on work and watch Bob operate inside a production-style codebase, exactly as it would within a client's real project.

> **Proceed to the lab guide:** [Demonstration Guide — Bob L3](https://cf-courses-data.static.labs.skills.network/qs0iGAPCTuC5dbOKNiCKKA/IBM%20Bob%20Level%203%20Demo%20Guide%20-%20v1.md.html?t=1778267426)

Onward to **Module 1 | Assist**, where you'll begin at the gentlest stage of the AI Maturity Curve — Bob working shoulder to shoulder with you in the editor.

---
