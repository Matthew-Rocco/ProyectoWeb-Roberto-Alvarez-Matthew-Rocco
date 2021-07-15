FROM centos:7
RUN yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
RUN yum install -y http://rpms.remirepo.net/enterprise/remi-release-7.rpm && \
	yum install -y yum-utils
RUN yum-config-manager --enable remi-php80
RUN \
	yum -y install httpd php php-cli php-common \
	php-mcrypt php-gd php-curl php-mysql php-ldap \
    php-zip php-fileinfo php  php-cli php-fpm php-mysqlnd \
    php-devel php-mbstring php-curl php-xml php-pear php-bcmath php-json\
	wget unzip
VOLUME /var/www/html
WORKDIR /var/www/html
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
&&  php composer-setup.php \
&& php -r "unlink('composer-setup.php');"\ 
&& mv composer.phar /usr/bin/composer
EXPOSE 80
CMD apachectl -DFOREGROUND