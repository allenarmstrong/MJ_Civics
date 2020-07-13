<% @LANGUAGE = "VBScript" %>

<%
'Resets Votes
dim fs,f, votesDavid, votesElaine, votesNorman, votesRita

resultsFile = Server.MapPath("voteresults.txt")

set fs=Server.CreateObject("Scripting.FileSystemObject") 
set f=fs.CreateTextFile(resultsFile,true)

votesDavid = 0
votesElaine = 0
votesNorman = 0
votesRita = 0

f.WriteLine(votesDavid & "," & votesElaine & "," & votesNorman & "," & votesRita & ",end")

set fs = nothing
set f = nothing
 
Response.Write("Voting Results Reset!")

%>


