<% @LANGUAGE = "VBScript" %>

<%
 Const forReading = 1, forWriting = 2, forAppending = 8
 
 Dim whichVote, votesDavid, votesElaine, votesNorman, votesRita
 Dim voteArray
 Dim fileObject, voteFile, fileStreamIN, fileStreamOUT, contents
 
 whichVote = Trim(Request("vote"))
 
 voteFile = Server.MapPath("voteresults.txt")
 
 Set fileStreamIN = Server.CreateObject("Scripting.FileSystemObject").OpenTextFile(voteFile, forReading, false)
 
 contents = fileStreamIN.ReadAll
 voteArray = split(contents,",")

 votesDavid = voteArray(0)
 votesElaine = voteArray(1)
 votesNorman = voteArray(2)
 votesRita = voteArray(3)
 
 If whichVote = 1 Then
	votesDavid = votesDavid + 1
	Response.write("vote for david!<br>")
 End If
 
 If whichVote = 2 Then
	votesElaine = votesElaine + 1
	Response.write("vote for elaine!")
 End If
 
 If whichVote = 3 Then
	votesNorman = votesNorman + 1
	Response.write("vote for norman!")
 End If
 
 If whichVote = 4 Then
	votesRita = votesRita + 1
	Response.write("vote for rita!")
 End If
 
 Response.write("david=" & votesDavid & "<br>")
 Response.write("elaine=" & votesElaine & "<br>")
 Response.write("norman=" & votesNorman & "<br>")
 Response.write("rita=" & votesRita & "<br>")
 
 fileStreamIN.close()
 
 dim fs,f, resultsFile

 resultsFile = Server.MapPath("voteresults.txt")

 set fs=Server.CreateObject("Scripting.FileSystemObject") 
 set f=fs.CreateTextFile(resultsFile,true)

 f.WriteLine(votesDavid & "," & votesElaine & "," & votesNorman & "," & votesRita & ",end")
 
 %>