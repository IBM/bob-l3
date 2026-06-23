## **iii. Hands-on (optional): the GitHub MCP server**

---

> **Follow the video** for a full walkthrough of this scenario: [Chapter 5.1: MCP \[IBM Bob L3\]](https://ibm.seismic.com/Link/Content/DCDRFd2HQdRc3G4WB866f2HHVQCG)

!!! warning "OPTIONAL MATERIAL"

    The following section is **NOT** required to complete accreditation for the Level 3 hands-on material. However, it is nevertheless valuable to understand the workings of and recommended as worthy of your time.

The following **optional** walkthrough connects the GitHub MCP server end-to-end with Bob.

---

1. The `GitHub MCP Server` repository is subject to frequent and continuous change. Validate the current GitHub MCP server steps (via the latest product and provider documentation) before attempting to implement this with clients.

    Navigate to the following page:
    !!! warning ""
        **URL:** <https://github.com/github/github-mcp-server>
    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/7f7316c1-4e88-4f49-8401-3a5ed8eeae79/File_6a95a696ca1c4a6c8819bb3f654145e1_text_export.jpeg" alt="" width="600" />
    </p>

---

2. Scroll down to the **"Local GitHub MCP Server"** section and click the hyperlink labelled: <a href="https://github.com/settings/personal-access-tokens/new" target="_blank">`Create a GitHub Personal Access Token`</a>

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/c31181e4-28eb-4146-a307-9e59304fec8f/File_b35b736ef39a45bdbf45643c473abaa9_text_export.jpeg" alt="" width="600" />
    </p>

---

3. Create a GitHub account (or sign in with an existing account).

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/9fc0ef6d-3a4d-4ed9-8c3a-8f83bff3fab3/File_5403de329aed4ea997e7b2fc61fc2ed6_text_export.jpeg" alt="" width="600" />
    </p>

---

4. After signing in, your browser will be redirected to the **Token Creation** page.

    Assign the token any name you like. For example, `IBM BOB`.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/96e4968a-d657-4f40-b49a-92ae56a7a8ab/File_273b7558ca644224a41f7ecbf3bb3b6a_text_export.jpeg" alt="" width="600" />
    </p>

---

5. Keep the other fields as their default inputs and scroll down the page until you locate the **Generate Token** button. Click it to continue.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/eb260f0f-6d1a-444b-96ce-35f016b1e14c/File_bd9264e8d21749bf8d5357beff6d81f0_text_export.jpeg" alt="" width="600" />
    </p>

---

6. Click **Generate Token** again on the pop-up panel that appears.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/ad66d49d-e881-44ca-be47-a39331a294e1/File_f9e9af3edaa346dbaa6a5688b5efc3d0_text_export.jpeg" alt="" width="600" />
    </p>

---

7. Your browser will load a new panel with your **Access Token**. Record these details to a notepad for reference later.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/5aaa2966-11a2-4547-8acb-6c0b91324ae1/File_e98281ce735b4901a11272e7f867a15f_text_export.jpeg" alt="" width="600" />
    </p>

---

8. Click the three dots (**...**) in the top corner of the agentic sidebar.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/6e462850-21fd-43fd-933d-c87ecb6f4918/File_590ebab65325437d82deff5f5d001e17_text_export.jpeg" alt="" width="600" />
    </p>

---

9. Click **MCP Servers**.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/06f371b4-dfeb-40e9-96a5-99b75238eae0/File_8e2a78feb0a946d089848ee59c5d5252_text_export.jpeg" alt="" width="600" />
    </p>

---

10. Click **Open** next to Project MCPs.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/48134e27-f04d-40a3-960e-52012c3894d9/File_ad150565d6b44c2c8ae99348be6411b1_text_export.jpeg" alt="" width="600" />
    </p>

---

11. Toggle the **Modes** switch button.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/5b16bdbb-b2de-4de8-8c25-5051b105a89c/File_d7316e331fd24246940a10a69ca94ea2_text_export.jpeg" alt="" width="600" />
    </p>

---

12. Under modes, select **Agent** to unlock IBM Bob's set of MCP tools.

    You will be able to configure the MCP server directly from the agentic sidebar.
    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/dcc29cfb-02e8-40d7-80ec-ccf0cd32858c/File_ed48e74df3db442d8a37db58f93f6e1c_text_export.jpeg" alt="" width="600" />
    </p>

---

13. Copy and paste the following prompt into a **text editor** (*not* the IBM Bob console), as you will need to perform some modifications before setting Bob to work with it.

    === "MODIFY THIS CODE BEFORE USE" 

        ``` python linenums="1" hl_lines="18"
        Add this to my local MCP servers.

        {
            "mcpServers": {
                "github": {
                "command": "npx",
                "args": [
                    "-y",
                    "@modelcontextprotocol/server-github"
                ],
                "env": {
                    "GITHUB_PERSONAL_ACCESS_TOKEN": ""
                }
                }
            }
        }

        Replace the placeholder with my PAT : <github_pat_123456789>
        ```
    !!! warning "INSTRUCTIONS TO MODIFY FOR YOUR MACHINE"
    
        The following elements require modification and further customization depending on your particular account and machine.

        - Replace `<github_pat_123456789>` on **Line 18** with your true **Access Token** details recorded in **Step 7**
        - Copy and paste the modified prompt into Bob's Agentic Sidebar (ensure that *Agent mode* is active)
        - Press ++enter++ to execute the instruction set
        - **Approve** requests from Bob as it works its way through the task
    
    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/dd6d1436-d9d2-4b48-991e-db71514bf2eb/File_90d413dcbdf6426aaf1994207dedf7f3_text_export.jpeg" alt="" width="600" />
    </p>

---

14. Once the task has completed, the `mcp.json` file will now reflect the data from your prompt.

    - The screenshot (below) denotes the removed lines of code (in red text) and the intended MCP configuration (in highlighted text) that has been added
    - Delete the commented line `// Made with Bob` should you wish to do further clean-up
    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/b4d51bb5-0ee2-4bc7-a3f7-edf33dd22ffb/File_c168e76e57be4e63b738ba646fa7806a_text_export.jpeg" alt="" width="600" />
    </p>
    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/8be45777-f6d5-4839-a7fa-0ee4ff39a06a/File_a5182378d8c449c5b84170923d3773c3_text_export.jpeg" alt="" width="600" />
    </p>

---

15. Send a follow-up prompt so that Bob can verify the configuration.

    Copy & paste the following prompt into the Agentic Sidebar, then press ++enter++ to execute.
    ```
    Test if the MCP server is working
    ```
    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/3cfba462-c930-419b-9904-2dd0bf508063/File_1804af2b62de44aa8068b88e3b13022f_text_export.jpeg" alt="" width="600" />
    </p>
    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/6ab18626-5a9e-4539-abb7-3a8ed153e568/File_d0eeec2453ee4e65b441c575c629ad50_text_export.jpeg" alt="" width="600" />
    </p>

---

16. Click the **X** icon to close the open `mcp.json` file. **Save** changes if prompted to do so.

    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/2bf86074-cb9a-41b0-9463-7496e7f425a6/File_37b4f1d11930401893c7e9658d6a61c9_text_export.jpeg" alt="" width="600" />
    </p>
    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/4bf778bd-deb7-4051-a5f6-5f5e8b4a7742/File_ef837abf65b64b129f1c5f15b08a6610_text_export.jpeg" alt="" width="600" />
    </p>

---

17. Restart the Bob IDE so the changes take effect.

    Fully quit and exit the Bob IDE application, then re-open the application.
    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/7ca31c1f-2664-487c-86d0-3acbba7deb53/File_18323b9e0ac243c78de9d5717115578f_text_export.jpeg" alt="" width="600" />
    </p>

---

18. Now test the new MCP server configuration.

    - Ensure that Bob is still in **Agent** mode
    - When ready, copy and paste the following prompt into the Agentic Sidebar and press ++enter++ to execute:
    ```
    List all issues from github for this repo
    ```
    !!! warning ""
        Take note that, as part of the usual approval and permissions granting process, Bob now asks for access to a tool on the GitHub MCP server.
    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/cf8efc10-3001-4ce3-bf93-5e5914a0ddbf/File_c316bd6bd3cc463eb91181ce7b71a7c4_text_export.jpeg" alt="" width="600" />
    </p>
    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/84f94ce7-c076-43d5-ae30-29e26ff4024a/File_4cce8ca861684dbd835c9f7b27e25d9d_text_export.jpeg" alt="" width="600" />
    </p>
    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/d42cb54e-be1b-424e-96a5-e02152e993b0/File_6de1027474524c53a3eea62794aa9692_text_export.jpeg" alt="" width="600" />
    </p>

---

19. After completing the workflow, Bob will list all the GitHub issues for `galaxium-travels` repository we began with. There's more work for the team (you) to do before that application is ready for primetime ... but that's for another day!

    Congratulations on making it this far — that concludes the hands-on materials for this exploration of the **AI Maturity Curve** using IBM Bob.

    Bob is continuously evolving, so expect to see the same from the supporting hands-on labs and demos available for the offering.
    <p align="left">
    <img src="https://colony-recorder.s3.amazonaws.com/files/2026-06-01/76ef923c-1d13-4919-bacb-8867d4abaed9/File_c2043fc8b9a14d8086efdc79160a0c3e_text_export.jpeg" alt="" width="600" />
    </p>

---